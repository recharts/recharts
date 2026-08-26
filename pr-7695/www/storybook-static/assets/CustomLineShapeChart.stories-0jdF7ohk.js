import{R as t}from"./iframe-C2IAoP9z.js";import{a as s}from"./isWellBehavedNumber-Dx9jutoa.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CtlTKue5.js";import{R as T}from"./zIndexSlice-BOdY0c2w.js";import{C as M}from"./CartesianGrid-EAaFVhHL.js";import{X as $}from"./XAxis-Ceu0E44T.js";import{Y as I}from"./YAxis-CkTJLDxP.js";import{L as O}from"./Legend-BhvsLI5l.js";import{T as W}from"./Tooltip-CSD5N63w.js";import{L as C}from"./Line-Cw_tbLsT.js";import{C as X}from"./Curve-Dgd-wDO-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CEcc3HUE.js";import"./RechartsWrapper-CGBW-uJJ.js";import"./index-ozLvQTxr.js";import"./index-Dzs-h2I5.js";import"./index-Bc8qjgC3.js";import"./index-OAErDOz1.js";import"./throttle-CMLI9bDX.js";import"./axisSelectors-Cc0lgYtN.js";import"./d3-scale-Cvy-Ur2o.js";import"./renderedTicksSlice-CQpIMs9x.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dhpx6_3-.js";import"./chartDataContext-D77crK3E.js";import"./CategoricalChart-Q-FJ4faS.js";import"./CartesianAxis-CxQqbA0R.js";import"./Layer-c70k-pgH.js";import"./Text-Cay_E7zv.js";import"./DOMUtils-SGZ0CxAs.js";import"./useId-B5XgiE_K.js";import"./useBackwardsCompatibleTheme-Dqn1q3dG.js";import"./Label-DAn48o-H.js";import"./ZIndexLayer-BqO-ONcy.js";import"./types-BONlApS2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-1DJfKNFx.js";import"./symbol-CLYRJo2K.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BlQ6_KNY.js";import"./uniqBy-Dak74J6O.js";import"./iteratee-CHgj4-IF.js";import"./useAnimationId-DzFP_Ei6.js";import"./Cross-BuISlzpb.js";import"./Rectangle-I7JckY3r.js";import"./util-Dxo8gN5i.js";import"./Sector-YB4DXi_y.js";import"./AnimatedItems-D3kWiSe3.js";import"./ActivePoints-D57dx6Bs.js";import"./Dot-BXKPSTnn.js";import"./RegisterGraphicalItemId-BFnewc-x.js";import"./ErrorBarContext-XS2v7-8C.js";import"./GraphicalItemClipPath-j5P5g_UT.js";import"./SetGraphicalItem-CB0dHT4c.js";import"./getRadiusAndStrokeWidthFromDot-BlVIdv42.js";import"./ActiveShapeUtils-dJNYAFGN.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-DmsxAhZl.js";const Ht={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let b=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Jt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Jt as __namedExportsOrder,Ht as default};
