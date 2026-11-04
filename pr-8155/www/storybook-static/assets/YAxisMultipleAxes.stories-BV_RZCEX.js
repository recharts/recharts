import{R as t}from"./iframe-C1xjtyup.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-D19WlBcl.js";import{R as l}from"./zIndexSlice-CK_7sDhl.js";import{C as x}from"./ComposedChart-9HbcDPNP.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-wQ6lyeaX.js";import{L as a}from"./Line-BWnpbJBY.js";import{X as c}from"./XAxis-yfo5ibqs.js";import{T as g}from"./Tooltip-BfH6nnk8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-rlFXaG67.js";import"./Text-dB1JvKf5.js";import"./resolveDefaultProps-BW194xym.js";import"./DOMUtils-DjnwPC-N.js";import"./ZIndexLayer-BioPoHSu.js";import"./index-C89VIpwW.js";import"./index-D-Z5HFQV.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-XOgxAb5A.js";import"./throttle-DeB2d41h.js";import"./axisSelectors-CL5t64V7.js";import"./d3-scale-CfSN9o3v.js";import"./CartesianAxis-gqJanQvj.js";import"./Layer-DgAL7HSK.js";import"./types-BMA5Z4Oj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DT_F_kFQ.js";import"./index-B3Q9mRXR.js";import"./index-DZVn9IOu.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-g7B-Y0pQ.js";import"./index-DNbtHs3M.js";import"./fillDefinitions-Chc0NBrg.js";import"./CartesianChart-CiggLvKc.js";import"./ZIndexPortal-ltJzS4wp.js";import"./CategoricalChart-DLW54M1r.js";import"./LabelList-DlsMy8UK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-pWpz6jQo.js";import"./useAnimationId-BHg-nTIp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BJp5D_xQ.js";import"./tooltipContext-B1k4F_lJ.js";import"./dataEntryStyles-CoAbyOEr.js";import"./ErrorBarContext-DT5kzwJ3.js";import"./activeStyles-MqObX4-I.js";import"./SetGraphicalItem-f1KdcC0B.js";import"./getZIndexFromUnknown-C1tDfpkk.js";import"./useEffectiveDataKey-C_d_9it0.js";import"./omit-zAXBsbCp.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BG_HxKHy.js";import"./step-pIDDNbPT.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CaE7-5dE.js";import"./Dot-D0EtM9Lh.js";import"./Symbols-DFo4fcMi.js";import"./symbol-DYSn4PiC.js";import"./getRadiusAndStrokeWidthFromDot-Cp452xPJ.js";import"./useElementOffset-lJW-fFdI.js";import"./uniqBy-AdfipyG1.js";import"./iteratee-Cpl52XgC.js";import"./Cross-6Lfr_FGz.js";import"./Sector-rpZFrsKt.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
