import{R as t}from"./iframe-Bs2Fwquo.js";import{R as D,l as p}from"./zIndexSlice-zNxU83Rq.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CCp5ZOnz.js";import{C as M}from"./CartesianGrid-DKsw99UQ.js";import{X as $}from"./XAxis-Da7a1LVz.js";import{Y as I}from"./YAxis-BIq5zgoj.js";import{L as O}from"./Legend-BdAsxtxW.js";import{T as W}from"./Tooltip-CQk23inZ.js";import{L as f}from"./Line-BDg9dyPy.js";import{C as X}from"./Curve-FXEPgScl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D3UZ2IUt.js";import"./throttle-CeO6b2ZD.js";import"./index-BKCm3YGD.js";import"./index-uk5XFsYy.js";import"./RechartsWrapper-H7J0pkbh.js";import"./axisSelectors-DqQ1JIAI.js";import"./polarAxisSelectors-C5Qopf47.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DLjk-fTH.js";import"./index-KgWNcN6T.js";import"./index-Czszie77.js";import"./renderedTicksSlice-BVtbpogk.js";import"./index-C74zadtv.js";import"./fillDefinitions-DLkwdqwS.js";import"./CartesianChart-C_O9Wt7i.js";import"./chartDataContext-0HCXDBF8.js";import"./CategoricalChart-DBu6n-Yr.js";import"./CartesianAxis-DRyjDMvy.js";import"./Layer-DSICE4z4.js";import"./Text-ggKHnocX.js";import"./ZIndexLayer-C_DcULPk.js";import"./Label-DziYhFsK.js";import"./types-BK-Q7FAz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CbMvplMD.js";import"./symbol-DShCcapM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-MuvUcavz.js";import"./uniqBy-CT6ciLFK.js";import"./iteratee-CuAFSfED.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-6uZicVw9.js";import"./Cross-ckzgyXQ_.js";import"./Rectangle-bDkm_FXF.js";import"./util-Dxo8gN5i.js";import"./Sector-Cim8UNhj.js";import"./dataEntryStyles-BK9Z9etj.js";import"./ActivePoints-wYZ7tQyZ.js";import"./Dot-x4ugbwnH.js";import"./activeStyles-B-3paNFW.js";import"./ErrorBarContext-DQsjNYcx.js";import"./SetGraphicalItem-BoCWO9i9.js";import"./getRadiusAndStrokeWidthFromDot-CATBlCH7.js";import"./ActiveShapeUtils-B_relbt6.js";import"./useEffectiveDataKey-t4gS0ZeN.js";import"./step-B-SD4ABD.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
