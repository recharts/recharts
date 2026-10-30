import{R as t}from"./iframe-DofrrzSz.js";import{R as D,l as p}from"./zIndexSlice-D4jXZr7P.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-tOZ7w82P.js";import{C as M}from"./CartesianGrid-8iIghlqn.js";import{X as $}from"./XAxis-eOTmMW_3.js";import{Y as I}from"./YAxis-CsrZD7w1.js";import{L as O}from"./Legend-D4qwGaS7.js";import{T as W}from"./Tooltip-BfuE3aDI.js";import{L as f}from"./Line-BTgeNYF6.js";import{C as X}from"./Curve-CgPD96Nk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-EpIoYf6A.js";import"./throttle-Cv7JSN-h.js";import"./index-CmvIzJTJ.js";import"./index-CiJIMcsu.js";import"./RechartsWrapper-E_-kYNca.js";import"./axisSelectors-pqZm8n4V.js";import"./polarAxisSelectors-B2VAv-kj.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BRGWuf4p.js";import"./index-BJz466Uq.js";import"./index-CebJFPbx.js";import"./renderedTicksSlice-C12QoSei.js";import"./index-MFcngAQ7.js";import"./CartesianChart-ofW7KWWn.js";import"./ZIndexPortal-D6LzzXvN.js";import"./CategoricalChart-swxT2d4I.js";import"./CartesianAxis-BejCdWme.js";import"./Layer-29jH0q4c.js";import"./Text-CCxE4_21.js";import"./DOMUtils-CiyeVOwd.js";import"./ZIndexLayer-C9xNwEQ1.js";import"./Label-CuxsGsNv.js";import"./types-DwbSI8T9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./Symbols-DBYIMXup.js";import"./symbol-BNKxEPpC.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-DuwvESx8.js";import"./useElementOffset-4AYFNtWz.js";import"./uniqBy-DXDzCPGj.js";import"./iteratee-BW9bJqkP.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-DIc4f048.js";import"./Cross-Ct78yXXS.js";import"./Rectangle-DH-fHCjZ.js";import"./util-Dxo8gN5i.js";import"./Sector-DZJ-f5iW.js";import"./LabelList-CvvaVn8W.js";import"./ActivePoints-DD_thTv0.js";import"./Dot-OjOZfNpf.js";import"./activeStyles-DFxA9Zbs.js";import"./ErrorBarContext-Be2kUHyO.js";import"./SetGraphicalItem-VPByvNpp.js";import"./getRadiusAndStrokeWidthFromDot-Cwz8hFM3.js";import"./ActiveShapeUtils-C_2mrMKm.js";import"./useEffectiveDataKey-kz6GzdqE.js";import"./step-B24WZLE3.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
