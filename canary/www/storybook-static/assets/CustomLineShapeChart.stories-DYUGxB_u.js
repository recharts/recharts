import{R as t}from"./iframe-DGsKi3sD.js";import{a as s}from"./isWellBehavedNumber-O5p8iLqQ.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-c7I3eIff.js";import{R as T}from"./zIndexSlice-KX0_yctO.js";import{C as M}from"./CartesianGrid-B0jOaMV2.js";import{X as $}from"./XAxis-DC55o2jW.js";import{Y as I}from"./YAxis-CmpmKkx6.js";import{L as O}from"./Legend-CXKBkp4r.js";import{T as W}from"./Tooltip-CwkMS4uO.js";import{L as C}from"./Line-BUFeRjVl.js";import{C as X}from"./Curve-Jm82kUWT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-WH78MRVQ.js";import"./RechartsWrapper-DYCPiSo2.js";import"./axisSelectors-DtyBM-5t.js";import"./throttle-DCh63S7N.js";import"./index-Dco7y41f.js";import"./index-Bp6gYlCO.js";import"./d3-scale-D5k0CP0B.js";import"./index-BcRP16iL.js";import"./index-C3o7ztbZ.js";import"./renderedTicksSlice-BV6OKQcy.js";import"./index-BUKcBCac.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DqPq6dfa.js";import"./chartDataContext-YSpCe_4G.js";import"./CategoricalChart-kDHsGv00.js";import"./CartesianAxis-BxHxH-nJ.js";import"./Layer-BEEnYnIh.js";import"./Text-ChCNWouT.js";import"./DOMUtils-Bj-nNPQP.js";import"./useId-DbfF67AC.js";import"./useBackwardsCompatibleTheme-CdHfIa1f.js";import"./Label-kB9Gr9Je.js";import"./ZIndexLayer-C-hUG3-A.js";import"./types-BYQ55WzM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-D4h-5pRv.js";import"./symbol-D4m_fLa8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BOCzr69a.js";import"./uniqBy-Bjp_9c9Z.js";import"./iteratee-3-ku6Z3Y.js";import"./useAnimationId-CpfROKBj.js";import"./Cross-CSwqD5sP.js";import"./Rectangle-QV_I5D3C.js";import"./util-Dxo8gN5i.js";import"./Sector-CDbYdWIO.js";import"./AnimatedItems-oaPm5uVb.js";import"./ActivePoints-ALRvVDi0.js";import"./Dot-BfPTVnro.js";import"./RegisterGraphicalItemId-Ci3kKosu.js";import"./ErrorBarContext-Lyc5VGnS.js";import"./GraphicalItemClipPath-DAhebsqX.js";import"./SetGraphicalItem-TmtzSo0n.js";import"./getRadiusAndStrokeWidthFromDot-D62b7kUR.js";import"./ActiveShapeUtils-D1-7_dRK.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-B-VK-dxT.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let b=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
