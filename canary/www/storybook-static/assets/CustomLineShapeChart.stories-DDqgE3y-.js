import{R as t}from"./iframe-BSWUJvVD.js";import{a as p}from"./isWellBehavedNumber-BmaIQTH1.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CZnFQ5dV.js";import{R as T}from"./zIndexSlice-Dodw6VBB.js";import{C as M}from"./CartesianGrid-DZaQ-sHd.js";import{X as $}from"./XAxis-CjaWOmHo.js";import{Y as I}from"./YAxis-CPNRWSYb.js";import{L as O}from"./Legend-DWAZHCCC.js";import{T as W}from"./Tooltip-uFYXTgrh.js";import{L as C}from"./Line-CjFCDQ2U.js";import{C as X}from"./Curve-DsJVJiVT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Vl9hB9kE.js";import"./resolveDefaultProps-BmihZEmA.js";import"./RechartsWrapper-DTzsDh4q.js";import"./index-CvaVBha6.js";import"./index-C2hfqVYs.js";import"./index-Dvw34fMT.js";import"./index-B3tdJtlF.js";import"./throttle-DttCRvoG.js";import"./renderedTicksSlice-DqZNOnEy.js";import"./axisSelectors-DyTmTh7D.js";import"./d3-scale-C12KvtOu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DPI5HXtq.js";import"./chartDataContext-DSlpgtsU.js";import"./CategoricalChart-DIaxl7pb.js";import"./CartesianAxis-CVEh4tt_.js";import"./Layer-Cf5OzKEI.js";import"./Text-AXOyatW-.js";import"./DOMUtils-BQwhIlov.js";import"./Label-DXe68yB0.js";import"./ZIndexLayer-Cq8G8FQO.js";import"./types-Dnz1a-tR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-Bya0QLqm.js";import"./symbol-2I3qt-S_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CYaTUNRm.js";import"./uniqBy-BgH0Yxrn.js";import"./iteratee-Dfdp0kkr.js";import"./useAnimationId-DQFk0Too.js";import"./Cross-D8os7VLI.js";import"./Rectangle-BwGjqEA9.js";import"./util-Dxo8gN5i.js";import"./Sector-k8eS64ue.js";import"./AnimatedItems-Z4j2jX_N.js";import"./ActivePoints-DxQISI2r.js";import"./Dot-B2jNwAb4.js";import"./RegisterGraphicalItemId-C0E0VwJr.js";import"./ErrorBarContext-CvQvhsxB.js";import"./GraphicalItemClipPath-BiLMWHLg.js";import"./SetGraphicalItem-DXqqCptu.js";import"./getRadiusAndStrokeWidthFromDot-Bc40o6k6.js";import"./ActiveShapeUtils-CLmLa7pa.js";import"./step-n-r0mMGx.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Nt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Nt as __namedExportsOrder,Bt as default};
