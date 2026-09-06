import{R as t}from"./iframe-dnbYLFAD.js";import{a as s}from"./isWellBehavedNumber-B4er61T0.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BP7gb6j2.js";import{R as T}from"./zIndexSlice-Tzq48rK3.js";import{C as M}from"./CartesianGrid-DJuFBttP.js";import{X as $}from"./XAxis-BSFcOfEW.js";import{Y as I}from"./YAxis-BETlZVB5.js";import{L as O}from"./Legend-C0D7u4Zg.js";import{T as W}from"./Tooltip-wzWd9Nc9.js";import{L as C}from"./Line-Cp5WLj85.js";import{C as X}from"./Curve-By68icMD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DaDkCz04.js";import"./RechartsWrapper-CUiYn_74.js";import"./axisSelectors-BxcK-66k.js";import"./throttle-CrGf0NM1.js";import"./index-D5_wYljM.js";import"./index-EbTzNNy6.js";import"./d3-scale-DOYXtK-0.js";import"./index-C2tfzzVf.js";import"./index-BeP9odN1.js";import"./renderedTicksSlice-ByAoIIAo.js";import"./index-Dcl79aHz.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-l5SDlhyQ.js";import"./chartDataContext-kt33HbbB.js";import"./CategoricalChart-BIzQL4lC.js";import"./CartesianAxis-sVyuEsJd.js";import"./Layer-BJ7lSbQt.js";import"./Text-BaKv6O4H.js";import"./DOMUtils-BtlArb_7.js";import"./useId-BZKwUvxw.js";import"./useBackwardsCompatibleTheme-QZyWgv_8.js";import"./Label-DfEdNEi7.js";import"./ZIndexLayer-DjGyUWfd.js";import"./types-ryOPFJaw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-hFj9E-ak.js";import"./symbol-Dp_lWvy3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CJAJZDYH.js";import"./uniqBy-Bsh6QpSm.js";import"./iteratee-CdEqff0I.js";import"./useAnimationId-p2irW4JC.js";import"./Cross-lkiugaGr.js";import"./Rectangle-CW-JqIPM.js";import"./util-Dxo8gN5i.js";import"./Sector-DxcQTB4E.js";import"./AnimatedItems-CZJCXzZR.js";import"./ActivePoints-D6BTfiYQ.js";import"./Dot-BOs-mB4N.js";import"./RegisterGraphicalItemId-BpbR-Lho.js";import"./ErrorBarContext-Bpb4kfuY.js";import"./GraphicalItemClipPath-DvPPmxSV.js";import"./SetGraphicalItem-BXaCF56M.js";import"./getRadiusAndStrokeWidthFromDot-BaTLVLjz.js";import"./ActiveShapeUtils-BbwV3h3t.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-Mew-CIDE.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let b=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
