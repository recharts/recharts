import{R as t}from"./iframe-Ct1svimm.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DJ-mdmri.js";import{R as l}from"./zIndexSlice-DuTNyMvu.js";import{C as x}from"./ComposedChart-Cy6iJ-vC.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-NsEmdJ2C.js";import{L as a}from"./Line-C_BZS029.js";import{X as c}from"./XAxis-DQtY80zm.js";import{T as g}from"./Tooltip-DCv6Ofun.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B2Mk85O5.js";import"./Text-VSzLHfPE.js";import"./resolveDefaultProps-DkFOW_Ct.js";import"./ZIndexLayer-BltRI-Nr.js";import"./index-o9gN_zh3.js";import"./index-BvFwwoiY.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-nz6HV1AE.js";import"./throttle-pNdBRgo_.js";import"./axisSelectors-CIwgaX7y.js";import"./d3-scale-BL9MDqqK.js";import"./CartesianAxis-D0Zofcf0.js";import"./Layer-CbeDBXuD.js";import"./types-EANqWthO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-LVzR_DNz.js";import"./index-LDd6dT7n.js";import"./index-CGKMaXkl.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D0VQQHcg.js";import"./index-CNkpQGrJ.js";import"./fillDefinitions-vVBAQBUA.js";import"./CartesianChart-fUt3zqCh.js";import"./chartDataContext-D2vVYZsu.js";import"./CategoricalChart-Darb6O46.js";import"./dataEntryStyles-CHH9ur-w.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-sIigVXDT.js";import"./useAnimationId-CDKCdXQz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BuOJWJdn.js";import"./tooltipContext-CjOvsAyy.js";import"./ErrorBarContext-CQBLFEFh.js";import"./activeStyles-DWgBPDlx.js";import"./SetGraphicalItem-inprgaSw.js";import"./getZIndexFromUnknown-CLDmdJG2.js";import"./useEffectiveDataKey-CW73rX9I.js";import"./omit-BUxAPCMO.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D34yK1QN.js";import"./step-Cz5QOKdQ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bj7-j5Zz.js";import"./Dot-CCM7dYWU.js";import"./Symbols-Bnfs-9ht.js";import"./symbol-CiSLDvHg.js";import"./getRadiusAndStrokeWidthFromDot-B2vi1B3A.js";import"./useElementOffset-CY9fcLag.js";import"./uniqBy-BMmxp9UC.js";import"./iteratee-BWHT356U.js";import"./Cross-B8pnqaKp.js";import"./Sector-DTuMi1n9.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
