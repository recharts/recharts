import{R as r}from"./iframe-Cb2PTRZu.js";import{R as c}from"./zIndexSlice-BOcdwE9B.js";import{C as d}from"./ComposedChart-B38G4g5a.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BboXBMrv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-3iOH7y6s.js";import"./index-CgcevczK.js";import"./index-D3ECOqH8.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-38f2qAXo.js";import"./isWellBehavedNumber-DqADXXOT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DJJRHEYU.js";import"./axisSelectors-YCR54JUg.js";import"./d3-scale-BEDYL0lJ.js";import"./index-sJmnv_Ao.js";import"./index-BHmwOcB9.js";import"./renderedTicksSlice-CGIalbK2.js";import"./index-DnXVLer0.js";import"./CartesianChart-bwFjxITE.js";import"./chartDataContext-DEoJ-_XA.js";import"./CategoricalChart-yk48FjSr.js";import"./Layer-CYH1X6I5.js";import"./activeStyles-utpSO3wr.js";import"./Label-60x-b7-u.js";import"./Text-D_NeQFRY.js";import"./pageBackground-Bn3yH5Mf.js";import"./useId-7AGdzjEK.js";import"./useBackwardsCompatibleTheme-DVeueyf3.js";import"./ZIndexLayer-CMs0nKoK.js";import"./dataEntryStyles-BA7za2_q.js";import"./useAnimationId-BSibkTQy.js";import"./ActivePoints-BINdFJVn.js";import"./Dot-CdjxtqZf.js";import"./types-A7qt-X3A.js";import"./RegisterGraphicalItemId-B9ytj1I9.js";import"./SetGraphicalItem-DtRHo2_o.js";import"./getRadiusAndStrokeWidthFromDot-iL1mBvr8.js";import"./ActiveShapeUtils-BmjVX6xw.js";import"./Curve-CXzUSEYX.js";import"./step-D0d2-Qo8.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-Me0QsLaT.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
