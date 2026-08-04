import{R as t}from"./iframe-UaiYvcjH.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BCEqWUDI.js";import{R as l}from"./zIndexSlice-8ciJYIbx.js";import{C as x}from"./ComposedChart-B4Fyi5OI.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CZ690Un0.js";import{L as a}from"./Line-ELdds7PM.js";import{X as c}from"./XAxis-CK0z3Vz2.js";import{T as g}from"./Tooltip-LOt2P0gE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D-49EUqg.js";import"./Text-D929lMpi.js";import"./resolveDefaultProps-Cgeajuqz.js";import"./DOMUtils-C7Mhp4IV.js";import"./isWellBehavedNumber-nnrZFap8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DxXiKzAC.js";import"./index-wYI15btu.js";import"./index-DPsHnpl0.js";import"./RechartsWrapper-O36xGZ1Z.js";import"./index-Ckg9ET-m.js";import"./index-CFVz9CrA.js";import"./throttle-7x_Svn9H.js";import"./renderedTicksSlice-DFI0gqQt.js";import"./axisSelectors-CeZCJXhc.js";import"./d3-scale-Dc-s3w0P.js";import"./CartesianAxis-ebqqt3vU.js";import"./Layer-DOm2DEtl.js";import"./types-CAb7fg-d.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-zp7TEc_c.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DWJG29v6.js";import"./chartDataContext-vTHMMUrQ.js";import"./CategoricalChart-8pueoY18.js";import"./tooltipContext-BuGDK7-Q.js";import"./AnimatedItems-DAGS26Tt.js";import"./useAnimationId-BTJ_iqsG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bha7Re6V.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-xOOsUn5l.js";import"./RegisterGraphicalItemId-CSm9rcoN.js";import"./ErrorBarContext-CFINHyZq.js";import"./GraphicalItemClipPath-CS_rGnhc.js";import"./SetGraphicalItem-C1Kxnb7_.js";import"./getZIndexFromUnknown-BUXuLBsW.js";import"./graphicalItemSelectors-CqS9UHaD.js";import"./Curve-DSlq-UJh.js";import"./step-PgNHRHTl.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Jp_kAfDq.js";import"./Dot-BkNyMUuC.js";import"./graphicalItemIdentity-CheNksEQ.js";import"./useElementOffset-DqA-fEeq.js";import"./uniqBy-BHqTd4CP.js";import"./iteratee-BoSxLbTm.js";import"./Cross-DMXTcJZT.js";import"./Sector-BE205kWR.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Kt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Kt as __namedExportsOrder,vt as default};
