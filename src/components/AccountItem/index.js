import className from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'


const cx = className.bind(styles)

function AccountItem() {
    return (
            <div className={cx('wrapper')}>
                <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7c3ebba67fad73f826e19dc49e7f9c98.jpeg?x-expires=1664103600&x-signature=UHn1a6ceMx%2BbaXSf3mv0xdDKBDc%3D" alt='Hoa'/>
                <div className={cx('info')}>
                    <p className={cx('name')}> 
                        <span>Nguyen B</span>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                    </p>
                    <span className={cx('username')}>nguyenb</span>
                </div>
            </div>
    )

}

export default AccountItem