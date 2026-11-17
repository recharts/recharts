import{R as r}from"./iframe-DgA6x1az.js";import{R as c}from"./zIndexSlice-BFMaekmq.js";import{C as d}from"./ComposedChart-ByKzrUfc.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-acXJaVUK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-WkX6zUQT.js";import"./throttle-BeFzmqAe.js";import"./index-TMkZxmcU.js";import"./index-D3kvvSt0.js";import"./RechartsWrapper-DDZDydJY.js";import"./axisSelectors-BWYipoBl.js";import"./polarAxisSelectors-FlPJLKCl.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CFWCEDhR.js";import"./index-hmFEHNSs.js";import"./index-DfxP2LJH.js";import"./renderedTicksSlice-Cbzlud4G.js";import"./index-Bhp_Ctpy.js";import"./fillDefinitions-D7cR_ZXA.js";import"./CartesianChart-xScX7k_y.js";import"./chartDataContext-BQDV-mFo.js";import"./CategoricalChart-925-SQc0.js";import"./getRadiusAndStrokeWidthFromDot-9ffd66xL.js";import"./Layer-4UauM4-I.js";import"./dataEntryStyles-C5svgbWd.js";import"./Label-SeLMQAdg.js";import"./Text-5b15Y2Dk.js";import"./ZIndexLayer-CKzh_iFN.js";import"./ActivePoints-D6pOQsPw.js";import"./Dot-DDXn63wb.js";import"./types-BWKVAmkC.js";import"./activeStyles-CoM8kTSe.js";import"./useAnimationId-DOzFiRYM.js";import"./Symbols-DrLVelb5.js";import"./symbol-CCLUbilH.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-B9ymtMOj.js";import"./ActiveShapeUtils-CCImj5PR.js";import"./Curve-C1ngk-4z.js";import"./step-CeJDq7tp.js";import"./useEffectiveDataKey-B9lYa-g7.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
