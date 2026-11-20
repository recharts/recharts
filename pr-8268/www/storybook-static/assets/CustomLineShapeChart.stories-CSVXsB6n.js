import{R as t}from"./iframe-B4BvLeme.js";import{R as D,l as p}from"./zIndexSlice-DyTYWVcs.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DP-S-syH.js";import{C as M}from"./CartesianGrid-OdD8ef-g.js";import{X as $}from"./XAxis-T18YTghU.js";import{Y as I}from"./YAxis-T0QKWtDf.js";import{L as O}from"./Legend-BkO5u0Ie.js";import{T as W}from"./Tooltip-BqwF9dCU.js";import{L as f}from"./Line-B5NkGOql.js";import{C as X}from"./Curve-B5oomGBl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-6IdFK7Ih.js";import"./throttle-DQNRL0AJ.js";import"./index-ClYdslLd.js";import"./index-59WpEyYi.js";import"./RechartsWrapper-B0OT4wWF.js";import"./axisSelectors-DS5uRUAA.js";import"./polarAxisSelectors-DqM84NZ8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DfUXkppW.js";import"./index-CwZtWez3.js";import"./index-Ba_PgChy.js";import"./renderedTicksSlice-D5gysmL5.js";import"./index-eMahtaOk.js";import"./fillDefinitions-CE1xVmK7.js";import"./CartesianChart-B8uUCQhO.js";import"./chartDataContext-DPDAwbOK.js";import"./CategoricalChart-gG_kR-cF.js";import"./CartesianAxis-reQTS2uW.js";import"./Layer-Bxh7arjC.js";import"./Text-B4NS4A04.js";import"./ZIndexLayer-Cb7Yxv7n.js";import"./Label-Bp5zUoNH.js";import"./types-UPHeghFs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BPMmDEMk.js";import"./symbol-YAvM_-gl.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BbIaovZs.js";import"./uniqBy-D7JAzLt7.js";import"./iteratee-DlFoAbv_.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-B1vlq9HU.js";import"./Cross-CYqaTdkm.js";import"./Rectangle-Wqh2w_9O.js";import"./util-Dxo8gN5i.js";import"./Sector-BXO2sNen.js";import"./getRadiusAndStrokeWidthFromDot-CutWxkzF.js";import"./dataEntryStyles-n779GVpT.js";import"./ActivePoints-Cz0D4X-h.js";import"./Dot-BDYf7Xcg.js";import"./activeStyles-BtDPe58A.js";import"./ErrorBarContext-BEP_BW62.js";import"./SetGraphicalItem-WJo3C0-v.js";import"./ActiveShapeUtils-CXNsVwUA.js";import"./useEffectiveDataKey-cN06FnCm.js";import"./step-il89s-4w.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Ht as __namedExportsOrder,zt as default};
