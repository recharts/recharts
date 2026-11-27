import{R as t}from"./iframe-KlB-4IG1.js";import{R as D,l as p}from"./zIndexSlice-BVLPARW-.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CeFYs7Ob.js";import{C as M}from"./CartesianGrid-BmUZdcHW.js";import{X as $}from"./XAxis-Ca5TUmhH.js";import{Y as I}from"./YAxis-DfRBNhMM.js";import{L as O}from"./Legend-ISN7Trl8.js";import{T as W}from"./Tooltip-DKTClIoH.js";import{L as f}from"./Line-DthVYZE5.js";import{C as X}from"./Curve-P8knzJBH.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-RcNfk3jW.js";import"./get-CjriyByo.js";import"./throttle-DXJsY_uT.js";import"./index-CwL9CPkI.js";import"./index-DAOJlBpl.js";import"./RechartsWrapper-CD7r0FUc.js";import"./axisSelectors-ThjGeQP_.js";import"./polarAxisSelectors-DkMb5oL8.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-BgndSVNB.js";import"./index-CX7x-S-w.js";import"./index-DNDuIT5t.js";import"./renderedTicksSlice-BREhx7Gk.js";import"./index-CUyiC2Ny.js";import"./fillDefinitions-Cx2SilO3.js";import"./CartesianChart-DYMMc77U.js";import"./chartDataContext-Dajtit_0.js";import"./CategoricalChart-DQDRiNPc.js";import"./CartesianAxis-CVzE0EQ3.js";import"./Layer-Cl7yX3if.js";import"./Text-Bpt3PNfo.js";import"./ZIndexLayer-DgEHrsgR.js";import"./Label-DqUMyvUu.js";import"./types-rdPmYL5R.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DP3kQoeZ.js";import"./symbol-Nq8AM552.js";import"./path-BBMZd4YL.js";import"./useElementOffset-H_h6LgYm.js";import"./uniqBy-BPtuw1V1.js";import"./iteratee-BNFWeZQu.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-C1lHvxQb.js";import"./Cross-DAUSRMC6.js";import"./Rectangle-D5Mi37gB.js";import"./util-Dxo8gN5i.js";import"./Sector-sZMkmdkn.js";import"./getRadiusAndStrokeWidthFromDot-DjAs6uXs.js";import"./dataEntryStyles-D-8l4rOK.js";import"./ActivePoints-iLZwRPS_.js";import"./Dot-CS5HZsDP.js";import"./activeStyles-BijthCg6.js";import"./ErrorBarContext-J4PcI6d4.js";import"./SetGraphicalItem-BaH0crAE.js";import"./ActiveShapeUtils-DFwShdCc.js";import"./useEffectiveDataKey-BXp8Go_I.js";import"./step-CgkxMamK.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
