import{R as t}from"./iframe-B1mwOZ4B.js";import{a as s}from"./isWellBehavedNumber-CJikzJGt.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DXTTIWtD.js";import{R as T}from"./zIndexSlice-DpKDqXzy.js";import{C as M}from"./CartesianGrid-DBXsj84G.js";import{X as $}from"./XAxis-BJXCAx8k.js";import{Y as I}from"./YAxis-CJdoflUo.js";import{L as O}from"./Legend-BcEnXvz4.js";import{T as W}from"./Tooltip-jjeQ7wLa.js";import{L as C}from"./Line-Doz1RfmB.js";import{C as X}from"./Curve-BdmH34os.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C5OuETHs.js";import"./RechartsWrapper-CO3J1RuZ.js";import"./index-h2iP9BkR.js";import"./index-CErrAQ9r.js";import"./index-CGmAV-n6.js";import"./index-DfE0c-YN.js";import"./throttle-B9hrHP2z.js";import"./renderedTicksSlice-CU0BXE-7.js";import"./axisSelectors-CHibCpWI.js";import"./d3-scale-C-ENdXUt.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-0J6AxZg0.js";import"./chartDataContext-4XOxxqNR.js";import"./CategoricalChart-aKqfV8G8.js";import"./CartesianAxis-DVp2DYfW.js";import"./Layer-BPIZMWg2.js";import"./Text-BvU8EdL8.js";import"./DOMUtils-j3EH7wUz.js";import"./Label-B_N5n860.js";import"./ZIndexLayer-Dgr6-NYc.js";import"./types-D3n9ld0M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-ATwIj2YD.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-C_MEhgLL.js";import"./symbol-BAzYPqqr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CPCExPSE.js";import"./uniqBy-DteB5QyM.js";import"./iteratee-BMrxWccK.js";import"./useAnimationId-DOfhPbEn.js";import"./Cross-B-vwqbkx.js";import"./Rectangle-B0J9CZX5.js";import"./util-Dxo8gN5i.js";import"./Sector-Bccm9uTi.js";import"./AnimatedItems-CP4Ed5tB.js";import"./ActivePoints-HVYpWw6k.js";import"./Dot-DiSbgsbS.js";import"./RegisterGraphicalItemId-CNYa3zPu.js";import"./ErrorBarContext-BUi-bCeZ.js";import"./GraphicalItemClipPath-B5MjopOD.js";import"./SetGraphicalItem-D7FiLvSi.js";import"./getRadiusAndStrokeWidthFromDot-CB_M050h.js";import"./ActiveShapeUtils-CKuXh55Z.js";import"./step-CnGXO0Ja.js";const qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const zt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,zt as __namedExportsOrder,qt as default};
