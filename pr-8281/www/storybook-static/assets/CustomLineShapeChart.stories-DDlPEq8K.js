import{R as t}from"./iframe-DlCdq56B.js";import{R as D,l as p}from"./zIndexSlice-AxtVyY3Z.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-G-vwRpsZ.js";import{C as M}from"./CartesianGrid-BP1wFMOe.js";import{X as $}from"./XAxis-BSv-cfqy.js";import{Y as I}from"./YAxis-CiL6lsrt.js";import{L as O}from"./Legend-C0cyFPQv.js";import{T as W}from"./Tooltip-jQliVFVi.js";import{L as f}from"./Line-CG_-O_No.js";import{C as X}from"./Curve-lp641HWe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BUW76FaL.js";import"./throttle-DEcvUi6F.js";import"./index-DRrdDGzH.js";import"./index-D0nmcM1A.js";import"./RechartsWrapper-fp3cwEAp.js";import"./axisSelectors-CSfGPpIK.js";import"./polarAxisSelectors-B-SnaQvT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-3Jo-Yey1.js";import"./index-Dl9VO4In.js";import"./index-CPJJsZF5.js";import"./renderedTicksSlice-xGoci0dc.js";import"./index-CVrMJXNG.js";import"./fillDefinitions-P9YSjlZq.js";import"./CartesianChart-DAQanSbx.js";import"./chartDataContext-BiLGYApi.js";import"./CategoricalChart-DEbdQdFq.js";import"./CartesianAxis-gaRy0kAT.js";import"./Layer-DYaOGPQe.js";import"./Text-DCVc9tCi.js";import"./ZIndexLayer-DoM1zDnE.js";import"./Label-DhxtC2yH.js";import"./types-CGD2CGOX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Dqo2PD8d.js";import"./symbol-BfVO91QA.js";import"./path-BBMZd4YL.js";import"./useElementOffset-D9xfe4ty.js";import"./uniqBy-7nQNTfGC.js";import"./iteratee-D1UWDese.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-DvgYyN8a.js";import"./Cross-Clk77yjw.js";import"./Rectangle-Bks-uWZg.js";import"./util-Dxo8gN5i.js";import"./Sector-CiLnt5Zg.js";import"./getRadiusAndStrokeWidthFromDot-9hVd_OrB.js";import"./dataEntryStyles-BQcljHLn.js";import"./ActivePoints-Ve_riuMJ.js";import"./Dot-B5biZeEa.js";import"./activeStyles-WuCpdruK.js";import"./ErrorBarContext-C53AQX2l.js";import"./SetGraphicalItem-DVkPEJIv.js";import"./ActiveShapeUtils-BhCU4_aJ.js";import"./useEffectiveDataKey-dLwdu-vi.js";import"./step-DukoPJ0d.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
