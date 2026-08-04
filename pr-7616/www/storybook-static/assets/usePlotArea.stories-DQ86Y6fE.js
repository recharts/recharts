import{R as t}from"./iframe-UaiYvcjH.js";import{u as a}from"./CategoricalChart-8pueoY18.js";import{R as p}from"./zIndexSlice-8ciJYIbx.js";import{C as s}from"./ComposedChart-B4Fyi5OI.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-ELdds7PM.js";import{X as l}from"./XAxis-CK0z3Vz2.js";import{Y as h}from"./YAxis-BCEqWUDI.js";import{L as c}from"./Legend-DG3TQPMR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-O36xGZ1Z.js";import"./index-Ckg9ET-m.js";import"./index-CFVz9CrA.js";import"./index-wYI15btu.js";import"./index-DPsHnpl0.js";import"./throttle-7x_Svn9H.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-DFI0gqQt.js";import"./axisSelectors-CeZCJXhc.js";import"./resolveDefaultProps-Cgeajuqz.js";import"./isWellBehavedNumber-nnrZFap8.js";import"./d3-scale-Dc-s3w0P.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DWJG29v6.js";import"./chartDataContext-vTHMMUrQ.js";import"./Layer-DOm2DEtl.js";import"./Curve-DSlq-UJh.js";import"./types-CAb7fg-d.js";import"./step-PgNHRHTl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DAGS26Tt.js";import"./Label-D-49EUqg.js";import"./Text-D929lMpi.js";import"./DOMUtils-C7Mhp4IV.js";import"./ZIndexLayer-DxXiKzAC.js";import"./useAnimationId-BTJ_iqsG.js";import"./ActivePoints-Jp_kAfDq.js";import"./Dot-BkNyMUuC.js";import"./RegisterGraphicalItemId-CSm9rcoN.js";import"./ErrorBarContext-CFINHyZq.js";import"./GraphicalItemClipPath-CS_rGnhc.js";import"./SetGraphicalItem-C1Kxnb7_.js";import"./graphicalItemIdentity-CheNksEQ.js";import"./ActiveShapeUtils-xOOsUn5l.js";import"./RechartsThemeContext-zp7TEc_c.js";import"./CartesianAxis-ebqqt3vU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-ryqClyJC.js";import"./symbol-pW74Md_C.js";import"./useElementOffset-DqA-fEeq.js";import"./uniqBy-BHqTd4CP.js";import"./iteratee-BoSxLbTm.js";const ct={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["UsePlotArea"];export{e as UsePlotArea,gt as __namedExportsOrder,ct as default};
