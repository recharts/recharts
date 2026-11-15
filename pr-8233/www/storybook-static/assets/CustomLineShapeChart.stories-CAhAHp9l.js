import{R as t}from"./iframe-C_daZv7l.js";import{R as D,l as p}from"./zIndexSlice-Dlp28lA6.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-C6tbcnFK.js";import{C as M}from"./CartesianGrid-D6XqE57d.js";import{X as $}from"./XAxis-zsBA2PQk.js";import{Y as I}from"./YAxis-DVc3O9Qy.js";import{L as O}from"./Legend-fewrjBRw.js";import{T as W}from"./Tooltip-DfKGamje.js";import{L as f}from"./Line-IPpA0euf.js";import{C as X}from"./Curve-DDXeNIWC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CWP-gMuW.js";import"./throttle-BHZ2wlOs.js";import"./index-7cXIOsrg.js";import"./index-D1CrGIf7.js";import"./RechartsWrapper-CgMr-Xnd.js";import"./axisSelectors-BlfT440m.js";import"./polarAxisSelectors-CT8xWjbN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dz0Pmj0c.js";import"./index-CJJC3II6.js";import"./index-DBxUtF6C.js";import"./renderedTicksSlice-CyloxQ1c.js";import"./index-CEW7yT3i.js";import"./fillDefinitions-BNbyE3VE.js";import"./CartesianChart-a1M-eJU5.js";import"./chartDataContext-D1D0-RnX.js";import"./CategoricalChart-D48joeLJ.js";import"./CartesianAxis-CWZlckQG.js";import"./Layer-WPlXRukA.js";import"./Text-DFRkhFZm.js";import"./ZIndexLayer-CwM562V-.js";import"./Label-DbTfJXbl.js";import"./types-BRKFz9xC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-3hlYR6yc.js";import"./symbol-C8mAwliN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dy4wSkY8.js";import"./uniqBy-DXIPSdGO.js";import"./iteratee-Bz-Pka1B.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-BeVDdEFy.js";import"./Cross-DXbdezvi.js";import"./Rectangle-BqgZTLn6.js";import"./util-Dxo8gN5i.js";import"./Sector-BHmivm3A.js";import"./dataEntryStyles-BrtwCCRb.js";import"./ActivePoints-Hq6VNZIp.js";import"./Dot-BjcrnH2C.js";import"./activeStyles-DqPxAQkX.js";import"./ErrorBarContext-Cc5g1M1Q.js";import"./SetGraphicalItem-C7RTXSJB.js";import"./getRadiusAndStrokeWidthFromDot-DS_16ujn.js";import"./ActiveShapeUtils-DH0fW0Mt.js";import"./useEffectiveDataKey-CLct0de8.js";import"./step-CfMQYX2G.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
