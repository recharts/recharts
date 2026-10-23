import{R as t}from"./iframe-DWz-Q7D1.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis--VjP9Ce5.js";import{R as l}from"./zIndexSlice-D4KjIdsO.js";import{C as x}from"./ComposedChart-DRhmHwTS.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-fHz40j2p.js";import{L as a}from"./Line-DmDKrJpN.js";import{X as c}from"./XAxis-BZUBECrT.js";import{T as g}from"./Tooltip-Dgb3DMOC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DNBocu_e.js";import"./Text-Rsbaz2Nf.js";import"./resolveDefaultProps-CzYzgORH.js";import"./pageBackground-Bn_EUSju.js";import"./isWellBehavedNumber-DQa0E9-N.js";import"./useId-CKTYSt7x.js";import"./useBackwardsCompatibleTheme-40wyYpH8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bg2Gmo9Q.js";import"./index-C1X2mD6F.js";import"./index-CkxejNVz.js";import"./axisSelectors-Ce2rWziX.js";import"./throttle-CiqOC1ip.js";import"./d3-scale-B1h-c6nn.js";import"./CartesianAxis-k4k8wY80.js";import"./Layer-0LCA68q2.js";import"./types-d8BMRC9H.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D1gMAPFE.js";import"./index-Dr0ysyHn.js";import"./index-DIeZp5vP.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DTtBamZ0.js";import"./index-DXyt1obU.js";import"./CartesianChart-cCLETRDS.js";import"./chartDataContext-BJRXZyCP.js";import"./CategoricalChart-C1Rl-Y0X.js";import"./activeStyles-cBdGFM1d.js";import"./useAnimationId-wagxbO9A.js";import"./dataEntryStyles-B5o6jV-U.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-04QXIjXf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C6nNN6Qs.js";import"./tooltipContext-QlfnW-MK.js";import"./ErrorBarContext-C2fYo0Zq.js";import"./GraphicalItemClipPath-CSYE-jHD.js";import"./SetGraphicalItem-D_zovdlO.js";import"./getZIndexFromUnknown-cXPSnZy0.js";import"./useEffectiveDataKey-kfwO5Jnl.js";import"./omit-sactXHxf.js";import"./isArguments-yB-y1yaH.js";import"./Curve-57G7mADL.js";import"./step-CnBlCK_d.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BA6UWnZF.js";import"./Dot-DC9IrQq5.js";import"./getRadiusAndStrokeWidthFromDot-Dqmrd8D2.js";import"./useElementOffset-Cl4JXsdE.js";import"./uniqBy-CSEyWmCH.js";import"./iteratee-D2MvuXn3.js";import"./Cross-CrN7AVkN.js";import"./Sector-C8W6elIw.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
