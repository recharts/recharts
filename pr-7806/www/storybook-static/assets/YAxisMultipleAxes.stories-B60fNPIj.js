import{R as t}from"./iframe-DMwBeJR9.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CzX5Dj-l.js";import{R as l}from"./zIndexSlice-BP1SI4lk.js";import{C as x}from"./ComposedChart-C1dXdi20.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DjMhhasp.js";import{L as a}from"./Line-D-0E5tR7.js";import{X as c}from"./XAxis-CXH1fd9N.js";import{T as g}from"./Tooltip-B2XNuoJR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B67df_fL.js";import"./Text-BAFoSTNm.js";import"./resolveDefaultProps-FbHkIvMQ.js";import"./DOMUtils-DtiMQzYq.js";import"./isWellBehavedNumber-BWBsnwkO.js";import"./useId-BlKh4dfu.js";import"./useBackwardsCompatibleTheme-ujSziCXW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CFNoJ68M.js";import"./index-W8It9SHe.js";import"./index-CW9TVSnL.js";import"./RechartsWrapper-DQf4ekbV.js";import"./axisSelectors-BzRm_10h.js";import"./throttle-JhdtWwel.js";import"./d3-scale-CTZXeK9y.js";import"./index-C4TxoYVJ.js";import"./index-KvfSCZEN.js";import"./renderedTicksSlice-Dl_Tlvvx.js";import"./index-CR-86fOk.js";import"./CartesianAxis-BJRJUBpp.js";import"./Layer-DMhp_Srr.js";import"./types-CMazcurm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C4QG-pAm.js";import"./chartDataContext-ClQA_jr_.js";import"./CategoricalChart-BZsjmvUf.js";import"./AnimatedItems-H6knMzOg.js";import"./useAnimationId-1Z-BMfjp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-eD4VGTbA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D9qWvVvy.js";import"./tooltipContext-BL0IMRcx.js";import"./RegisterGraphicalItemId-D2Rdl-pC.js";import"./ErrorBarContext-DyCS0eIu.js";import"./GraphicalItemClipPath-DH2vwsgS.js";import"./SetGraphicalItem-BmbkJBqp.js";import"./getZIndexFromUnknown-U3IR9nod.js";import"./useGraphicalItemIdentity-1ETpT5kl.js";import"./Curve-BLRaA_Xy.js";import"./step-DujtKqi5.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BaKtG9_T.js";import"./Dot-CC7p1g3t.js";import"./getRadiusAndStrokeWidthFromDot-MjPGd6X0.js";import"./useElementOffset-BgsP0NQQ.js";import"./uniqBy-BrSK9-IV.js";import"./iteratee-IvuUwhdK.js";import"./Cross-0dAFBkGb.js";import"./Sector-BhnsCJ2u.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
