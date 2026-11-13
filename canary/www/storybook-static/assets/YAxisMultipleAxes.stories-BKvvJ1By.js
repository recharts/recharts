import{R as t}from"./iframe-B8oHBE2B.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-xlwnxq94.js";import{R as l}from"./zIndexSlice-CY69X-_e.js";import{C as x}from"./ComposedChart-D7HXrnrm.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CpeDegw6.js";import{L as a}from"./Line-CAspGmUf.js";import{X as c}from"./XAxis-ZjtmoAYX.js";import{T as g}from"./Tooltip-B9TIEJjx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Do0pS3hb.js";import"./Text-CvT3zU9x.js";import"./resolveDefaultProps-CgUiyAYX.js";import"./ZIndexLayer-ctGMKsDO.js";import"./index-DmSsi07Q.js";import"./index-cJCZbnBh.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D2FYbhjQ.js";import"./throttle-CUYrrG0C.js";import"./axisSelectors-Ds5h7JK9.js";import"./d3-scale-CbMuV4Xw.js";import"./CartesianAxis-DLXM_Mrp.js";import"./Layer-d-LKmDNk.js";import"./types-pqA8tR2L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-a5-uxQKT.js";import"./index-DMrvH4_y.js";import"./index-DGZRfgJf.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DFBUYq9O.js";import"./index-BO756sza.js";import"./fillDefinitions-DKQEn6JZ.js";import"./CartesianChart-Cx94wGq6.js";import"./chartDataContext-DF9RfUto.js";import"./CategoricalChart-B_DdruJc.js";import"./dataEntryStyles-BdZkCN9m.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DSfNDwxH.js";import"./useAnimationId-DstXvFRQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DvU5i_JD.js";import"./tooltipContext-BqMPDS13.js";import"./ErrorBarContext-FVg_hFB1.js";import"./activeStyles-B9e3PXPC.js";import"./SetGraphicalItem-CNXf_JK1.js";import"./getZIndexFromUnknown-C1iuqT_v.js";import"./useEffectiveDataKey-R28HVoPp.js";import"./omit-DCLQHFbq.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DGAKYDzB.js";import"./step-BZkNkw_J.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Cp4H5Nc6.js";import"./Dot-BJ0YQTw_.js";import"./Symbols-DlTVDDFq.js";import"./symbol-DwKqx-k1.js";import"./getRadiusAndStrokeWidthFromDot-CwP227yr.js";import"./useElementOffset-BUgTmqWV.js";import"./uniqBy-CWI3Th2f.js";import"./iteratee-BSURygRC.js";import"./Cross-QgFbzuj_.js";import"./Sector-CVmZoiCJ.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
