import{R as r}from"./iframe-OYo09Kjn.js";import{R as c}from"./zIndexSlice-C0otV0Tq.js";import{C as d}from"./ComposedChart-O8l7FYsv.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BKQGkoBU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BV2Pd4xr.js";import"./throttle-2ukkMEiH.js";import"./index-B1YAqRON.js";import"./index-jR8-nOeq.js";import"./RechartsWrapper-DDeqrE6g.js";import"./axisSelectors-DwbFlqn_.js";import"./polarAxisSelectors-h48S2J0z.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CkZT7Yna.js";import"./index-D6UCrPx5.js";import"./index-OFmsSHfS.js";import"./renderedTicksSlice-Dj299CQx.js";import"./index-C9mjTPMA.js";import"./fillDefinitions-DyAhyaHy.js";import"./CartesianChart-CU1owHvq.js";import"./ZIndexPortal-THJMy4l1.js";import"./CategoricalChart-reFCYYlz.js";import"./Layer-BKQ7Cq1e.js";import"./LabelList-D8hIzv9X.js";import"./Label-BLd_HfLL.js";import"./Text-Dl7WOzrI.js";import"./DOMUtils-VDBzCn3R.js";import"./ZIndexLayer-fjsdvpte.js";import"./ActivePoints-YU9mNETr.js";import"./Dot-BVDEoTVF.js";import"./types-CzskQIcv.js";import"./activeStyles-By7c-_I7.js";import"./useAnimationId-Bfw_1I20.js";import"./dataEntryStyles-CwKCb_eK.js";import"./Symbols-DShbzJAN.js";import"./symbol-CmMsv7zq.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-C2cjU4L3.js";import"./getRadiusAndStrokeWidthFromDot-BexLXBfB.js";import"./ActiveShapeUtils-DsFWfn7B.js";import"./Curve-DVj7Kjw7.js";import"./step-DXZ6DTgl.js";import"./useEffectiveDataKey-BkqAzi9W.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,st as __namedExportsOrder,pt as default};
