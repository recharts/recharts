import{R as t}from"./iframe-BiXVY0YN.js";import{a as p}from"./isWellBehavedNumber-DE5idxcf.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CuhODK-Q.js";import{R as T}from"./zIndexSlice-nY6JNSg8.js";import{C as M}from"./CartesianGrid-DOHYVCTU.js";import{X as $}from"./XAxis-8aOHTtEo.js";import{Y as I}from"./YAxis-Da5Yhwpa.js";import{L as O}from"./Legend-Cuei_W9Z.js";import{T as W}from"./Tooltip-CONywgA0.js";import{L as C}from"./Line-DjzxsS4q.js";import{C as X}from"./Curve-D7wuzLSQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DSfNO7n4.js";import"./resolveDefaultProps-DD4XGInB.js";import"./RechartsWrapper-C7VFUx7Q.js";import"./index-BDCsY1Bp.js";import"./index-PSniF_G7.js";import"./index-nFhQ5GlG.js";import"./index-C9pEG8B_.js";import"./immer-Bguoov5l.js";import"./renderedTicksSlice-D3zVHdBs.js";import"./axisSelectors-aUKbGV01.js";import"./d3-scale-Bqjw06G0.js";import"./string-B6fdYHAA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D3egFHKO.js";import"./chartDataContext-CjUfDHdj.js";import"./CategoricalChart-BzNcO88n.js";import"./CartesianAxis-eCQKtisH.js";import"./Layer-uuEILT3S.js";import"./Text-DmK0i7Bz.js";import"./DOMUtils-C2cF8Szu.js";import"./Label-BJ6MA63M.js";import"./ZIndexLayer-6ebEplbW.js";import"./types-CLXMlpTC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BELca2ug.js";import"./symbol-DzSheJ7o.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CPLS44DG.js";import"./uniqBy-CcGBVuj2.js";import"./iteratee-STjWE_qx.js";import"./useAnimationId-CfBicigm.js";import"./Cross-C3BpIl7J.js";import"./Rectangle-DuKXzg_S.js";import"./Sector-jQ_V-qCe.js";import"./AnimatedItems-DfhrJO_Z.js";import"./ActivePoints-B-SHt4Wz.js";import"./Dot-BnLwvEMd.js";import"./RegisterGraphicalItemId-MDxIerXT.js";import"./ErrorBarContext-DrwdD_lh.js";import"./GraphicalItemClipPath-DNkkSszT.js";import"./SetGraphicalItem-AeS5weMQ.js";import"./getRadiusAndStrokeWidthFromDot-LZlKw0gF.js";import"./ActiveShapeUtils-RN-LxFg0.js";import"./step-BzaqppXW.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
