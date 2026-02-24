/**
 * menuData.js
 * Single Responsibility: owns the quick-menu item definitions only.
 */
import orderIcon from '@/assets/order_icon.jpeg'
import redeemIcon from '@/assets/redeem_icon.jpeg'
import voucherIcon from '@/assets/voucher_icon.jpeg'
import privilegeIcon from '@/assets/privilege_icon.jpeg'
import historyIcon from '@/assets/history_icon.jpeg'
import contactIcon from '@/assets/contact_icon.jpeg'

/** @type {{ label: string, icon: string }[]} */
export const menuItems = [
    { label: 'Order', icon: orderIcon },
    { label: 'Redeem', icon: redeemIcon },
    { label: 'My Vouchers', icon: voucherIcon },
    { label: 'Privilege', icon: privilegeIcon },
    { label: 'History', icon: historyIcon },
    { label: 'Contact Us', icon: contactIcon },
]
