import{R as t}from"./iframe-D0yOAL3n.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-ClNwS6nX.js";import{R as l}from"./zIndexSlice-Dn2Ys6gV.js";import{C as x}from"./ComposedChart-DzH7Aje-.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DsaJuwrA.js";import{L as a}from"./Line-CO6xWWXS.js";import{X as c}from"./XAxis-ntZPF60e.js";import{T as g}from"./Tooltip-DEMLV3mW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BzBQuB2T.js";import"./Text-z-sERxAx.js";import"./resolveDefaultProps-Cif0RW7j.js";import"./pageBackground-Cu52DhUW.js";import"./ZIndexLayer-DLelF1L8.js";import"./index-D1v08_vM.js";import"./index-ELyMDiEN.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-aGfpHLq1.js";import"./throttle-BrS_cZCp.js";import"./dataEntryStyles-BNyFarFk.js";import"./axisSelectors-DATXyQCy.js";import"./d3-scale-n2sBsRY0.js";import"./CartesianAxis-dbcozJzz.js";import"./Layer-CY7a4PGZ.js";import"./types-IRHz2iGt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cx7A9Rjk.js";import"./index-CwmpmH_i.js";import"./index-CqRNnRSm.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DwTnzypz.js";import"./index-BQd9CGB1.js";import"./CartesianChart-DLG1qiqu.js";import"./ZIndexPortal-DWwaC6CZ.js";import"./CategoricalChart-BqkqH0t5.js";import"./LabelList-CZmttjyK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-hiMsXewW.js";import"./useAnimationId-CKYg8A0e.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CLWTEHLV.js";import"./tooltipContext-D1gf5Yw0.js";import"./RegisterGraphicalItemId-DVCLPf9f.js";import"./ErrorBarContext-Dnk3UGdS.js";import"./activeStyles-BHH3u2ze.js";import"./SetGraphicalItem-Co3HUPOs.js";import"./getZIndexFromUnknown-BIr8Glr3.js";import"./useEffectiveDataKey-DqoTIDte.js";import"./omit-D-Ea7IUT.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DzBXGra2.js";import"./step-C1lWuIkW.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BljR9_g2.js";import"./Dot-lux40cEN.js";import"./Symbols-BGu4wd_L.js";import"./symbol-C_vPW6X7.js";import"./getRadiusAndStrokeWidthFromDot-DLGQUjjw.js";import"./useElementOffset-CIhlqtry.js";import"./uniqBy-UFr_nm2i.js";import"./iteratee-DStnvH7g.js";import"./Cross-DOgmqpkJ.js";import"./Sector-CYfHmUnD.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
