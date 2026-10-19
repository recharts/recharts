import{R as t}from"./iframe-B-JmM6UU.js";import{a as p}from"./isWellBehavedNumber-DQDu_bHq.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DrxbOIg-.js";import{R as T}from"./zIndexSlice-C8zA9EPG.js";import{C as M}from"./CartesianGrid-op3iprNZ.js";import{X as $}from"./XAxis-C4JtUciF.js";import{Y as I}from"./YAxis-y-7tLGKF.js";import{L as O}from"./Legend-9Q_MpkC_.js";import{T as W}from"./Tooltip-BQC-S9Hn.js";import{L as C}from"./Line-APLpaCe9.js";import{C as X}from"./Curve-D2NNcFkX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DLWiqyxh.js";import"./RechartsWrapper-DfO4pEP4.js";import"./axisSelectors-BOzuD9HL.js";import"./throttle-8T2wZGvQ.js";import"./index-BnGOySnb.js";import"./index-BOPh7oG5.js";import"./d3-scale-YxBV3HYG.js";import"./index-BvO0zfg2.js";import"./index-B935EuoS.js";import"./renderedTicksSlice-BZnDG7lD.js";import"./index-D52JV6b6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B7NRlPSh.js";import"./chartDataContext-G_QhrL7C.js";import"./CategoricalChart-B_Dp9jOQ.js";import"./CartesianAxis-CM5ea8KA.js";import"./Layer-05QvI-9e.js";import"./Text-DlcURdmF.js";import"./pageBackground-ox3rMkA1.js";import"./useId-D9iNydjp.js";import"./useBackwardsCompatibleTheme-VmJV6TRL.js";import"./Label-Cf51nyga.js";import"./ZIndexLayer-DqLhyd5r.js";import"./dataEntryStyles-BZpY2uoY.js";import"./types-cRgwCxfH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CpFUVsBd.js";import"./symbol-D-KM-vyQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-7NR9MJAY.js";import"./uniqBy-BsjnheNl.js";import"./iteratee-B6OwKtMw.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-Bhe9ODDX.js";import"./Cross-CtOLlKPV.js";import"./Rectangle-Cjis6rUG.js";import"./util-Dxo8gN5i.js";import"./Sector-BhGy3Knc.js";import"./activeStyles-DovphoLv.js";import"./ActivePoints-DJ1-E8SN.js";import"./Dot-9xtzkZIA.js";import"./RegisterGraphicalItemId-DykgIfL1.js";import"./ErrorBarContext-CpFTBBZZ.js";import"./GraphicalItemClipPath-BVkYhuPi.js";import"./SetGraphicalItem-CDXb3rWS.js";import"./getRadiusAndStrokeWidthFromDot-DF_TJdmj.js";import"./ActiveShapeUtils-Lf70CQL3.js";import"./useEffectiveDataKey-BDAANayS.js";import"./step-DnNP7AgI.js";const Ut={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Vt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Vt as __namedExportsOrder,Ut as default};
