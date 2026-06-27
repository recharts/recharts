import{R as t}from"./iframe-BW71A1Nl.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CBUi58KC.js";import{R as l}from"./zIndexSlice-D0nATGhG.js";import{C as x}from"./ComposedChart-CoIWpLYJ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BEoIcg9q.js";import{L as a}from"./Line-EpLSPRs3.js";import{X as c}from"./XAxis-DjClnNcb.js";import{T as g}from"./Tooltip-CbRCMo5d.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BsK8Vst9.js";import"./CartesianAxis-6UaBWKrc.js";import"./Layer-BmYZzoaR.js";import"./resolveDefaultProps-BwvNNDLm.js";import"./Text-DDeu8cp3.js";import"./DOMUtils-mo8tevis.js";import"./isWellBehavedNumber-6M6ThiRO.js";import"./Label-7Nd_0-bw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B4CcndAw.js";import"./index-qgRbHTql.js";import"./index-CUqZ5NZx.js";import"./types-CoBkUvrA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BObQrIhG.js";import"./immer-iZdzJVDj.js";import"./RechartsWrapper-B0unhTn-.js";import"./index-7I5wiu9M.js";import"./index-BeMOkAqZ.js";import"./axisSelectors-CGn4mfga.js";import"./d3-scale-vdMRCf0o.js";import"./CartesianChart-CGswDKyQ.js";import"./chartDataContext-DixWbQnN.js";import"./CategoricalChart-C428T1Jl.js";import"./tooltipContext-V-tLLPbE.js";import"./AnimatedItems-D3llU_s4.js";import"./useAnimationId-L1gInTUa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D96ELsS-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DnbIkStc.js";import"./RegisterGraphicalItemId-DpVIzNFe.js";import"./ErrorBarContext-Pp_bAm-i.js";import"./GraphicalItemClipPath-C8hys0YQ.js";import"./SetGraphicalItem-DVIO0q7q.js";import"./getZIndexFromUnknown-H4IYpaHa.js";import"./graphicalItemSelectors-B_CHNNOp.js";import"./Curve-DRyRFJEG.js";import"./step-m-kUV5sp.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C3kyVPB9.js";import"./Dot-CymeOwpM.js";import"./getRadiusAndStrokeWidthFromDot-Dv0_9MPJ.js";import"./useElementOffset-B07ItHDs.js";import"./uniqBy-DLbJkmvT.js";import"./iteratee-D3nwGriT.js";import"./Cross-BTbsn6cT.js";import"./Sector-5Zp1hLTU.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
