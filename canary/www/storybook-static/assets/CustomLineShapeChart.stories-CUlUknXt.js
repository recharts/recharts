import{R as t}from"./iframe-Dk9ZDdT1.js";import{a as s}from"./isWellBehavedNumber-CxvtDvRb.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DWznxct4.js";import{R as T}from"./zIndexSlice-DeceblpS.js";import{C as M}from"./CartesianGrid-B7u57R78.js";import{X as $}from"./XAxis-A_28Fvyn.js";import{Y as I}from"./YAxis-BG4jVm_S.js";import{L as O}from"./Legend-CCsIj-6h.js";import{T as W}from"./Tooltip-DxRWiHMA.js";import{L as C}from"./Line-CTBd3E56.js";import{C as X}from"./Curve-1m4xWofF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-zYTWecoa.js";import"./RechartsWrapper-DP2ymT_2.js";import"./axisSelectors-DxLef304.js";import"./throttle-DIOOZof0.js";import"./index-CmUfEz5q.js";import"./index-B2rutIU6.js";import"./d3-scale-MpKXBNtT.js";import"./index-BxlkNIur.js";import"./index-bvujDpj7.js";import"./renderedTicksSlice-Ckrd08To.js";import"./index-DbhjdF6k.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DIP7sg4A.js";import"./chartDataContext-QSp1AmWQ.js";import"./CategoricalChart-Bx3cIM0F.js";import"./CartesianAxis-DltOMyOx.js";import"./Layer-DmyqVj_Z.js";import"./Text-DxLESXkZ.js";import"./DOMUtils-BpNuC4xp.js";import"./useId-DehfeINH.js";import"./useBackwardsCompatibleTheme-C4vQm8Qy.js";import"./Label-B5fu-9Ux.js";import"./ZIndexLayer-DeueZom8.js";import"./types-B5p8Vh7N.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-COFyOQ-q.js";import"./symbol-C02v1ewE.js";import"./path-DyVhHtw_.js";import"./useElementOffset-KhQd1oWd.js";import"./uniqBy-CX3aiEBe.js";import"./iteratee-CvAqSA3n.js";import"./useAnimationId-Br2uK6cb.js";import"./Cross-Pm4B82Mc.js";import"./Rectangle-Cb1y9t4l.js";import"./util-Dxo8gN5i.js";import"./Sector-DlwIDXc0.js";import"./AnimatedItems-BJxfKwUv.js";import"./ActivePoints-FU3V29Uc.js";import"./Dot-Dxbx8gos.js";import"./RegisterGraphicalItemId-z6QxmQfF.js";import"./ErrorBarContext-BvizcH0k.js";import"./GraphicalItemClipPath-CdL4vBCz.js";import"./SetGraphicalItem-BbnWj2u0.js";import"./getRadiusAndStrokeWidthFromDot-CO6bt368.js";import"./ActiveShapeUtils-EOWKKtqz.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-CLhWgX2G.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let b=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
