import{R as t}from"./iframe-Bah9cDPf.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-I4iqsmgp.js";import{R as l}from"./zIndexSlice-D6NwopLq.js";import{C as x}from"./ComposedChart-082vf-Dq.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CQ384sUE.js";import{L as a}from"./Line-CdLhYhot.js";import{X as c}from"./XAxis-CUlouZeJ.js";import{T as g}from"./Tooltip-DYnVHdZI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BLtLxFh_.js";import"./Text-Ct-0y4jN.js";import"./resolveDefaultProps-zC5o00WN.js";import"./ZIndexLayer-DdBSJIQM.js";import"./index-D6Fwvcda.js";import"./index-CvqzOiHn.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CEDelL9A.js";import"./throttle-BjlLZ4wO.js";import"./axisSelectors-BJF83DO6.js";import"./d3-scale-BLITEdPK.js";import"./CartesianAxis-Bt_lCqiI.js";import"./Layer-CD06LZri.js";import"./types-C6A66RfZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CiPoI8vI.js";import"./index-FRb1AgAe.js";import"./index-CadkBFdQ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CuqmEJPa.js";import"./index-flr5alNa.js";import"./fillDefinitions-BbHKQE2Y.js";import"./CartesianChart-DT-YIr9t.js";import"./chartDataContext-9AmAFOH8.js";import"./CategoricalChart-DcONsU4c.js";import"./dataEntryStyles-BkXi-SmE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C-T60wMT.js";import"./useAnimationId-DEYdhNFn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHFZOTDo.js";import"./tooltipContext-NMmUXLpN.js";import"./ErrorBarContext-BtmuWUeb.js";import"./activeStyles-C-zEEDQQ.js";import"./SetGraphicalItem-DSHrOFY_.js";import"./getZIndexFromUnknown-CKMf31u1.js";import"./useEffectiveDataKey-cBqedM3V.js";import"./omit-C3tmWtq5.js";import"./isArguments-yB-y1yaH.js";import"./Curve-KDiJn0MP.js";import"./step-CoC1wfrs.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CMlYxCeA.js";import"./Dot-OGnZYrwe.js";import"./Symbols-CAXKij6d.js";import"./symbol-BgjIZi1V.js";import"./getRadiusAndStrokeWidthFromDot-DWUFIa-L.js";import"./useElementOffset-Bd4rfpxM.js";import"./uniqBy-xNCP_Qij.js";import"./iteratee-C8Fc8Asa.js";import"./Cross-iaCl0PL2.js";import"./Sector-CkDX9Lcx.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
