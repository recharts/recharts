import{R as r}from"./iframe-DJz24IKn.js";import{R as c}from"./zIndexSlice-CaAOW0et.js";import{C as d}from"./ComposedChart-xCfhu6hO.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-YolXLO61.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BsbtN1cS.js";import"./index-BNwKLvBG.js";import"./index-DbXeBKDO.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Y06lZ3Q4.js";import"./isWellBehavedNumber-fz8KERtX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DWus6mTf.js";import"./axisSelectors-Dn-i2Eyh.js";import"./d3-scale-DpRdoN7U.js";import"./index-C__guRbQ.js";import"./index-C6YBLKF8.js";import"./renderedTicksSlice-Dg7Ny4_Y.js";import"./index-DMHuassP.js";import"./CartesianChart-CnQAJVhL.js";import"./chartDataContext-Dgbqaxm0.js";import"./CategoricalChart-uGwJvut9.js";import"./Layer-CBv-uhLi.js";import"./AnimatedItems-CKV2EJWT.js";import"./Label-VNkqCN5V.js";import"./Text-DOF1K2eH.js";import"./DOMUtils-bn8Tja0g.js";import"./useId-B5fw3oZO.js";import"./useBackwardsCompatibleTheme-LsfOWVY-.js";import"./ZIndexLayer-Clw8d4Oc.js";import"./useAnimationId-CK0cbgiG.js";import"./ActivePoints-CWxCsPop.js";import"./Dot-C5Lvhk5n.js";import"./types-DwqEhWGa.js";import"./RegisterGraphicalItemId-2YIIw7m6.js";import"./GraphicalItemClipPath-CvjsKkOB.js";import"./SetGraphicalItem-npZ_hDhu.js";import"./getRadiusAndStrokeWidthFromDot-CFlofvCE.js";import"./ActiveShapeUtils-BKaKBNza.js";import"./Curve-3bxMRdbj.js";import"./step-BwCbZBCr.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-z2pv7TYv.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
