import{R as t}from"./iframe-D6i__LoP.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B5XPYz7e.js";import{R as l}from"./zIndexSlice-CyKHeydM.js";import{C as x}from"./ComposedChart-CjSU8WGa.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CgfzO7cl.js";import{L as a}from"./Line-vAyDldKH.js";import{X as c}from"./XAxis-CAx1pIhU.js";import{T as g}from"./Tooltip-B2sIES0q.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CcM-HFI6.js";import"./Text-hZV3tmbb.js";import"./resolveDefaultProps-CqzBSPJb.js";import"./DOMUtils-DeYJTEnJ.js";import"./isWellBehavedNumber-CluTirfv.js";import"./useId-tMVNWk8Z.js";import"./useBackwardsCompatibleTheme-CQpTINsS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cgr5Sbcn.js";import"./index-DMFV_hOu.js";import"./index--kg1cBe0.js";import"./RechartsWrapper-DCWzk6aO.js";import"./axisSelectors-LrJn1RIt.js";import"./throttle-DZkWvGbR.js";import"./d3-scale-CPAx7ill.js";import"./index-TOqTf9p4.js";import"./index-B0NZAO6k.js";import"./renderedTicksSlice-Cqr2zXs_.js";import"./index-CfSh3_es.js";import"./CartesianAxis-DBbQlRic.js";import"./Layer-g6kXe5Or.js";import"./types-BferblG2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-SH0Bt_l8.js";import"./chartDataContext-DoSIIG4T.js";import"./CategoricalChart-CQsWyxzZ.js";import"./AnimatedItems-BhOCoOsB.js";import"./useAnimationId-Bi456v-E.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cv4A529c.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-p-Z4MyM6.js";import"./tooltipContext-CrT1ux3Y.js";import"./RegisterGraphicalItemId-DMF9sTtn.js";import"./ErrorBarContext-CpDc2JTq.js";import"./GraphicalItemClipPath-C4ZotnNz.js";import"./SetGraphicalItem-B41pEGJW.js";import"./getZIndexFromUnknown-RAllw5jp.js";import"./useGraphicalItemIdentity-CVzdXzJV.js";import"./Curve-BAgXbvIK.js";import"./step-D_yNlVES.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BQ7megxl.js";import"./Dot-M_mEsxZK.js";import"./getRadiusAndStrokeWidthFromDot-BXIDSkMw.js";import"./useElementOffset-tYvBFPP4.js";import"./uniqBy-DBt7WG7j.js";import"./iteratee-q1Bz0EWx.js";import"./Cross-Dm5OOX8L.js";import"./Sector-CcGdp1iE.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
