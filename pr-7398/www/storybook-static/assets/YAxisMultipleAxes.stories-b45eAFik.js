import{c as t}from"./iframe-NcbJjIA-.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-ChVwWRRp.js";import{g as l}from"./zIndexSlice-aCnp2Btu.js";import{C as x}from"./ComposedChart-DfrMZJ_4.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-B5zPHW37.js";import{L as a}from"./Line-RSDTcduu.js";import{X as A}from"./XAxis-DiCo7qCN.js";import{T as g}from"./Tooltip-COT2KQpS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DHJyV6O8.js";import"./CartesianAxis-psqNgsI7.js";import"./Layer-DCqaOLDO.js";import"./resolveDefaultProps-9rxZz0BJ.js";import"./Text-DqOWrbn9.js";import"./DOMUtils-VR3x78qW.js";import"./isWellBehavedNumber-CRF88Te0.js";import"./Label-CCVmR4pI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-HA7Kz5Ib.js";import"./index-YT6PLmfy.js";import"./index-B2hMZxT9.js";import"./types-B9riDZKf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CazECbsF.js";import"./immer-BrPcfpKJ.js";import"./RechartsWrapper-C1F7SUdh.js";import"./index-CASzwsd1.js";import"./index-CFcgoPKL.js";import"./axisSelectors--8zPyqGt.js";import"./d3-scale-B1TlVjVH.js";import"./CartesianChart-nvfGUb02.js";import"./chartDataContext-D7rZipVq.js";import"./CategoricalChart-DRPlCLZK.js";import"./tooltipContext-C_C4jXBA.js";import"./ReactUtils-DWeLU6sY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-mfMkikui.js";import"./useAnimationId-DLPXxqZ8.js";import"./ActiveShapeUtils-BwCeE1t9.js";import"./RegisterGraphicalItemId-BKDuHm0F.js";import"./ErrorBarContext-B9yYejtE.js";import"./GraphicalItemClipPath-Ck3Yxo8v.js";import"./SetGraphicalItem-BB4v-B7H.js";import"./getZIndexFromUnknown-Cmb-RlB6.js";import"./graphicalItemSelectors-_gD5Ywq2.js";import"./Curve-Cp63qh_R.js";import"./step-C2x-UOx0.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B2_IpYKn.js";import"./Dot-mM6yrIUr.js";import"./getRadiusAndStrokeWidthFromDot-D1I_pbtw.js";import"./useElementOffset-BKMYYN7l.js";import"./uniqBy-DcnQgaYm.js";import"./iteratee-BM8l9ZPr.js";import"./Cross-DRc0bQ-R.js";import"./Sector-DkfipeFJ.js";const Et={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Ct=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Ct as __namedExportsOrder,Et as default};
