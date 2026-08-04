import{R as e}from"./iframe-UaiYvcjH.js";import{R as i}from"./zIndexSlice-8ciJYIbx.js";import{C as a}from"./ComposedChart-B4Fyi5OI.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-yHoT2PHp.js";import{X as s}from"./XAxis-CK0z3Vz2.js";import{Y as c}from"./YAxis-BCEqWUDI.js";import{L as d}from"./Line-ELdds7PM.js";import{R as g}from"./ReferenceLine-BJhQ6nxo.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-7x_Svn9H.js";import"./index-wYI15btu.js";import"./index-DPsHnpl0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cgeajuqz.js";import"./isWellBehavedNumber-nnrZFap8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-O36xGZ1Z.js";import"./index-Ckg9ET-m.js";import"./index-CFVz9CrA.js";import"./renderedTicksSlice-DFI0gqQt.js";import"./axisSelectors-CeZCJXhc.js";import"./d3-scale-Dc-s3w0P.js";import"./CartesianChart-DWJG29v6.js";import"./chartDataContext-vTHMMUrQ.js";import"./CategoricalChart-8pueoY18.js";import"./CartesianAxis-ebqqt3vU.js";import"./Layer-DOm2DEtl.js";import"./Text-D929lMpi.js";import"./DOMUtils-C7Mhp4IV.js";import"./Label-D-49EUqg.js";import"./ZIndexLayer-DxXiKzAC.js";import"./types-CAb7fg-d.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-zp7TEc_c.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DSlq-UJh.js";import"./step-PgNHRHTl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DAGS26Tt.js";import"./useAnimationId-BTJ_iqsG.js";import"./ActivePoints-Jp_kAfDq.js";import"./Dot-BkNyMUuC.js";import"./RegisterGraphicalItemId-CSm9rcoN.js";import"./ErrorBarContext-CFINHyZq.js";import"./GraphicalItemClipPath-CS_rGnhc.js";import"./SetGraphicalItem-C1Kxnb7_.js";import"./graphicalItemIdentity-CheNksEQ.js";import"./ActiveShapeUtils-xOOsUn5l.js";import"./CartesianScaleHelper-C9Oze4oB.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
