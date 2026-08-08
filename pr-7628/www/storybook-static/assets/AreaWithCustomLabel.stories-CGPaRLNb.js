import{R as r}from"./iframe-D_g4F33S.js";import{R as c}from"./zIndexSlice-qk_W91LH.js";import{C as d}from"./ComposedChart-DYa_RjMP.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-aDMDN8Ud.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C8ol7TbU.js";import"./index-bqb3oNhY.js";import"./index-DU-EG8Ox.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BMNeBin1.js";import"./isWellBehavedNumber-DbmSi19e.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CPYm6CLL.js";import"./index-DjQlfIyB.js";import"./index-RMAjGoM1.js";import"./axisSelectors-BTeU-Lnf.js";import"./d3-scale-CQkgQnoX.js";import"./renderedTicksSlice-9yA5jGLk.js";import"./CartesianChart-C30ToINU.js";import"./chartDataContext-abfC3Iow.js";import"./CategoricalChart-Dp3h3G-T.js";import"./Layer-CZAafMyB.js";import"./AnimatedItems-5bCKGYgm.js";import"./Label-mwDIEaZu.js";import"./Text-dC5bBnrz.js";import"./DOMUtils-D15rvujY.js";import"./ZIndexLayer-CBemJ52Z.js";import"./useAnimationId-F97RPKrS.js";import"./ActivePoints-CjAssZ9T.js";import"./Dot-DT1eTQrx.js";import"./types-E4fDsamD.js";import"./RegisterGraphicalItemId-S9qjeBvy.js";import"./GraphicalItemClipPath-Ce5CheJW.js";import"./SetGraphicalItem-MWcQtcPB.js";import"./getRadiusAndStrokeWidthFromDot-Bjf5_Zne.js";import"./ActiveShapeUtils-AssYUN6s.js";import"./Curve-DHe5_cmM.js";import"./step-BcJtBoCB.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-DEVDikLO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DvjkEvTx.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
