import{R as t}from"./iframe-UaiYvcjH.js";import{a as s}from"./isWellBehavedNumber-nnrZFap8.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BA6QSB_q.js";import{R as T}from"./zIndexSlice-8ciJYIbx.js";import{C as M}from"./CartesianGrid-yHoT2PHp.js";import{X as $}from"./XAxis-CK0z3Vz2.js";import{Y as I}from"./YAxis-BCEqWUDI.js";import{L as O}from"./Legend-DG3TQPMR.js";import{T as W}from"./Tooltip-LOt2P0gE.js";import{L as C}from"./Line-ELdds7PM.js";import{C as X}from"./Curve-DSlq-UJh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cgeajuqz.js";import"./RechartsWrapper-O36xGZ1Z.js";import"./index-Ckg9ET-m.js";import"./index-CFVz9CrA.js";import"./index-wYI15btu.js";import"./index-DPsHnpl0.js";import"./throttle-7x_Svn9H.js";import"./renderedTicksSlice-DFI0gqQt.js";import"./axisSelectors-CeZCJXhc.js";import"./d3-scale-Dc-s3w0P.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DWJG29v6.js";import"./chartDataContext-vTHMMUrQ.js";import"./CategoricalChart-8pueoY18.js";import"./CartesianAxis-ebqqt3vU.js";import"./Layer-DOm2DEtl.js";import"./Text-D929lMpi.js";import"./DOMUtils-C7Mhp4IV.js";import"./Label-D-49EUqg.js";import"./ZIndexLayer-DxXiKzAC.js";import"./types-CAb7fg-d.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-zp7TEc_c.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-ryqClyJC.js";import"./symbol-pW74Md_C.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DqA-fEeq.js";import"./uniqBy-BHqTd4CP.js";import"./iteratee-BoSxLbTm.js";import"./useAnimationId-BTJ_iqsG.js";import"./Cross-DMXTcJZT.js";import"./Rectangle-Bha7Re6V.js";import"./util-Dxo8gN5i.js";import"./Sector-BE205kWR.js";import"./AnimatedItems-DAGS26Tt.js";import"./ActivePoints-Jp_kAfDq.js";import"./Dot-BkNyMUuC.js";import"./RegisterGraphicalItemId-CSm9rcoN.js";import"./ErrorBarContext-CFINHyZq.js";import"./GraphicalItemClipPath-CS_rGnhc.js";import"./SetGraphicalItem-C1Kxnb7_.js";import"./graphicalItemIdentity-CheNksEQ.js";import"./ActiveShapeUtils-xOOsUn5l.js";import"./step-PgNHRHTl.js";const qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
