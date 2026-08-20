import{R as t}from"./iframe-BhiOFyfH.js";import{a as s}from"./isWellBehavedNumber-BwlogVL6.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BeD4BZfO.js";import{R as T}from"./zIndexSlice-WFdO_Wlf.js";import{C as M}from"./CartesianGrid-Bf0Cm6mK.js";import{X as $}from"./XAxis-D91QOOUm.js";import{Y as I}from"./YAxis-Dze_1sMv.js";import{L as O}from"./Legend-CeOycJFx.js";import{T as W}from"./Tooltip-Cckhkqma.js";import{L as C}from"./Line-UXLRfrJQ.js";import{C as X}from"./Curve-CpWAvzLi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BHk6Yj6z.js";import"./RechartsWrapper-B2d-0bYl.js";import"./index-BT9oMJbA.js";import"./index-DJy0Duu-.js";import"./index-BRJFlVc0.js";import"./index-DeYpMxlR.js";import"./throttle-BBaDx3dP.js";import"./axisSelectors-Bl2dPHcW.js";import"./d3-scale-C-h-rPXJ.js";import"./renderedTicksSlice-zx9Xm1Pt.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B6R4HcNL.js";import"./chartDataContext-BhguihgP.js";import"./CategoricalChart-DcSIPsvk.js";import"./CartesianAxis-CQrYYA1t.js";import"./Layer-Ba5yNHO4.js";import"./Text-BMsFzFUq.js";import"./DOMUtils-BcE_Ruj2.js";import"./useId-BRnf_4WU.js";import"./useBackwardsCompatibleTheme-DVBvH0yy.js";import"./Label-CAt1bZso.js";import"./ZIndexLayer-CI2RHWLO.js";import"./types-BWOiEP2_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BLL-AV4B.js";import"./symbol-DbxTuWVO.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BDZs2rv_.js";import"./uniqBy-P6yERp21.js";import"./iteratee-BsV9Fw2p.js";import"./useAnimationId-DyRYr1Ls.js";import"./Cross-CHgI0DDp.js";import"./Rectangle-D4NblHq1.js";import"./util-Dxo8gN5i.js";import"./Sector-Ck7cMPLl.js";import"./AnimatedItems-Dz4w2Slg.js";import"./ActivePoints-CGIfG4Xx.js";import"./Dot-CQ3jSuei.js";import"./RegisterGraphicalItemId-fX9aZfoT.js";import"./ErrorBarContext-8r615JCx.js";import"./GraphicalItemClipPath-CDXt4g8R.js";import"./SetGraphicalItem-DxySj5XD.js";import"./getRadiusAndStrokeWidthFromDot-_1HcDU-Q.js";import"./ActiveShapeUtils-DWii8vVl.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-DMp5D_NX.js";const Ht={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let b=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip cursor={{
          stroke: 'gold',
          strokeWidth: 2
        }} defaultIndex={3} />
          <Line type="linear" dataKey="pv" stroke="#8884d8" activeDot={{
          r: 8
        }} shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<circle r={5} fill="currentColor" />} />} />
          <Line type="linear" dataKey="uv" stroke="#82ca9d" shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<rect x={-5} y={-5} width={10} height={10} fill="currentColor" />} />} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Jt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Jt as __namedExportsOrder,Ht as default};
