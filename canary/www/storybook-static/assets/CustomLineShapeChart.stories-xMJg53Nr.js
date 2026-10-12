import{R as t}from"./iframe-BobpZpVS.js";import{a as p}from"./isWellBehavedNumber-DQVuNcQo.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-B_XS8djb.js";import{R as T}from"./zIndexSlice-B5VUc3FO.js";import{C as M}from"./CartesianGrid-CuGfEpsz.js";import{X as $}from"./XAxis-BH9jyr1P.js";import{Y as I}from"./YAxis-BrRETyZ5.js";import{L as O}from"./Legend-CGS_rYuE.js";import{T as W}from"./Tooltip-D_aCS2jn.js";import{L as C}from"./Line-BliFn9Dn.js";import{C as X}from"./Curve-CcNLhp3P.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-5KovoEsD.js";import"./RechartsWrapper-DSKVysWi.js";import"./axisSelectors-Bu_v2Lbu.js";import"./throttle-fEV8U6G7.js";import"./index-DvsroPxE.js";import"./index-hH2wUpdj.js";import"./d3-scale-VuFeIDMA.js";import"./index-C6hjAe0R.js";import"./index-CSAFGNBA.js";import"./renderedTicksSlice-BCdbdoOJ.js";import"./index-RL4br-tv.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DSfZoi_U.js";import"./chartDataContext-C6lKjqxm.js";import"./CategoricalChart-DkLSs2T9.js";import"./CartesianAxis-BxngHTzr.js";import"./Layer-Clw1CWo5.js";import"./Text-BN-_pQam.js";import"./pageBackground-DetAsOi9.js";import"./useId-Fbd6tkKG.js";import"./useBackwardsCompatibleTheme-BHDQUTNL.js";import"./Label-BmZLFZpv.js";import"./ZIndexLayer-Bl_UcLFa.js";import"./types-C4bXB_C_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CIh84bSt.js";import"./symbol-9WIN_U8L.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B88yDXSB.js";import"./uniqBy-CPmUYUdg.js";import"./iteratee-v_noJUXw.js";import"./useAnimationId-IPDjwgCP.js";import"./Cross-CeLxTsAz.js";import"./Rectangle-D8bi7cvO.js";import"./util-Dxo8gN5i.js";import"./Sector-BE7b76Fg.js";import"./activeStyles-DmXgXh0p.js";import"./dataEntryStyles-JNlk2hjG.js";import"./ActivePoints-C8uj9bPt.js";import"./Dot--zx8-KPd.js";import"./ErrorBarContext-CJCBopYS.js";import"./GraphicalItemClipPath-DHs6ehgp.js";import"./SetGraphicalItem-BeNFDElG.js";import"./getRadiusAndStrokeWidthFromDot-CIGb04Tt.js";import"./ActiveShapeUtils-FaefHkVT.js";import"./useEffectiveDataKey-CwNvQLsF.js";import"./step-jQ6ElyLT.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
