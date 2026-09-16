import{R as t}from"./iframe-yFYT_zN7.js";import{a as p}from"./isWellBehavedNumber-CbA6SpN0.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BJ6byiX6.js";import{R as T}from"./zIndexSlice-D0SqWiCA.js";import{C as M}from"./CartesianGrid-DVxerUhF.js";import{X as $}from"./XAxis-CLVPgrfg.js";import{Y as I}from"./YAxis-BT6AeQik.js";import{L as O}from"./Legend-DrIwFL3Y.js";import{T as W}from"./Tooltip-k51Qbtbr.js";import{L as C}from"./Line-CH7nYjYy.js";import{C as X}from"./Curve-BBFKRsTK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CTg3N4RV.js";import"./RechartsWrapper-BK2Nqghc.js";import"./axisSelectors-Cz3aPbz8.js";import"./throttle-B6GNdBpm.js";import"./index-CuJJm_Tn.js";import"./index-Du7yNjke.js";import"./d3-scale--DHWqn1j.js";import"./index-DMtch-zH.js";import"./index-DrQda-y9.js";import"./renderedTicksSlice-DwWtQ1Di.js";import"./index-DI6gPrhu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Ck9zKM_U.js";import"./chartDataContext-CrNdyu-C.js";import"./CategoricalChart-DBil3fX0.js";import"./CartesianAxis-DGDqWvXT.js";import"./Layer-Dy_GX6yW.js";import"./Text-CYbp4Bob.js";import"./DOMUtils-6VQmbUCR.js";import"./useId-CBpR1fpo.js";import"./useBackwardsCompatibleTheme-BN2mwgRc.js";import"./Label-99DUDCMD.js";import"./ZIndexLayer-CHhs3r11.js";import"./types-B35KvzC0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BWDQbWo5.js";import"./symbol-CNs_eA0A.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BM0KkVoV.js";import"./uniqBy-CM-zGjqN.js";import"./iteratee-DzYgEjfZ.js";import"./useAnimationId-DeDzp5yx.js";import"./Cross-CnTASDln.js";import"./Rectangle-juKcDyre.js";import"./util-Dxo8gN5i.js";import"./Sector-nfz0sPyA.js";import"./AnimatedItems-Ck-1wErl.js";import"./ActivePoints-BrgN9jKH.js";import"./Dot-UFOmxDS-.js";import"./RegisterGraphicalItemId-CaKRVAB3.js";import"./ErrorBarContext-BZhrM93k.js";import"./GraphicalItemClipPath-StVjduOg.js";import"./SetGraphicalItem-DwYip7WF.js";import"./getRadiusAndStrokeWidthFromDot-B44_s7et.js";import"./ActiveShapeUtils-liUtTmHf.js";import"./useGraphicalItemIdentity-CrfN38Fv.js";import"./step-Dfa3kdsE.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
