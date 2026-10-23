import{R as t}from"./iframe-prTVX46R.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BP1gJNh-.js";import{R as l}from"./zIndexSlice-BBM3QNxr.js";import{C as x}from"./ComposedChart-JM9IJLAu.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-ClwtBrkw.js";import{L as a}from"./Line-jTAj4npb.js";import{X as c}from"./XAxis-CAekIzf1.js";import{T as g}from"./Tooltip-hoRkM0Mq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CVltcmCw.js";import"./Text-DjfbNrah.js";import"./resolveDefaultProps-CgD2AS6S.js";import"./pageBackground-DWO83YrS.js";import"./isWellBehavedNumber-sGfX6V07.js";import"./useId-ClNpWPkJ.js";import"./useBackwardsCompatibleTheme-CSXD7-a6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BUy73e0U.js";import"./index-DxBxvBWq.js";import"./index-Bh60i1A4.js";import"./dataEntryStyles-D6au6UrY.js";import"./axisSelectors-C2RKwHTh.js";import"./throttle-DvEGNDvN.js";import"./d3-scale-CFQbB9BF.js";import"./CartesianAxis-vl41q2bl.js";import"./Layer-1a5Zn_r7.js";import"./types-D57XnYuF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-iUiCR_an.js";import"./index-BB-SpmyJ.js";import"./index-DnW1VngH.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D3mCvzlT.js";import"./index-BQtEBMtF.js";import"./CartesianChart-D5BTPRp4.js";import"./chartDataContext-C7eScBxX.js";import"./CategoricalChart-DhkwWrJ_.js";import"./activeStyles-DLUKuBq3.js";import"./useAnimationId-BWMAKk3V.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-3LSQXoSu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CXxeeNqe.js";import"./tooltipContext-Ci3BK910.js";import"./RegisterGraphicalItemId-Cwh2uO7M.js";import"./ErrorBarContext-Bm4lfbUj.js";import"./GraphicalItemClipPath-BBiEKuCI.js";import"./SetGraphicalItem-FbCkTx_q.js";import"./getZIndexFromUnknown-D40a8vSk.js";import"./useEffectiveDataKey-Byody78s.js";import"./omit-DPEmSIJh.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CuhJA6qj.js";import"./step-DkGj8L15.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BByUh20Z.js";import"./Dot-B6R-m7zq.js";import"./getRadiusAndStrokeWidthFromDot-GrV3uc-f.js";import"./useElementOffset-BcZCpHmW.js";import"./uniqBy-GbBgnUco.js";import"./iteratee-CH0cPLcN.js";import"./Cross-DSI7tRai.js";import"./Sector-DsyWTF3x.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
