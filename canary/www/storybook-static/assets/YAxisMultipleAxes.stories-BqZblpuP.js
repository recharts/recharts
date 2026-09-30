import{R as t}from"./iframe-B96S8mAp.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DfdWV3Tw.js";import{R as l}from"./zIndexSlice-D8E1yZ1V.js";import{C as x}from"./ComposedChart-CehmNKG2.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CJXa7nNs.js";import{L as a}from"./Line-BO6upPIL.js";import{X as c}from"./XAxis-nVEhAG3F.js";import{T as g}from"./Tooltip-BF46jXzZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CqVVrAo5.js";import"./Text-BO1tL-Lm.js";import"./resolveDefaultProps-hdreNdXc.js";import"./DOMUtils-B7FzpOG9.js";import"./isWellBehavedNumber-DfNG0DIy.js";import"./useId-C9t3LM8u.js";import"./useBackwardsCompatibleTheme-BlUzVNC-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DUeg7nPd.js";import"./index-DkqDlut5.js";import"./index-h_VAy7kX.js";import"./RechartsWrapper-BMN5w2mX.js";import"./axisSelectors-CoX3e_2U.js";import"./throttle-ClBFd37Y.js";import"./d3-scale-9nPPSrDa.js";import"./index-Bb9sRMCm.js";import"./index-C-l8V5Fx.js";import"./renderedTicksSlice-BTyytnZ2.js";import"./index-YSWiv6gp.js";import"./CartesianAxis-Bj8xr9W5.js";import"./Layer-DAZaOor8.js";import"./types-Dzd-LsE5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-a8pJKl2i.js";import"./chartDataContext-DDU_iWzI.js";import"./CategoricalChart-BJxf0mxD.js";import"./AnimatedItems-B3aC5t_D.js";import"./useAnimationId-CEflbmtS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dd-JcMlj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CRg0xwL0.js";import"./tooltipContext-BVsixjLI.js";import"./RegisterGraphicalItemId-yOmcvIGu.js";import"./ErrorBarContext-D5MNBcr8.js";import"./GraphicalItemClipPath-RRykAftR.js";import"./SetGraphicalItem-CvYLLoCp.js";import"./getZIndexFromUnknown-BXYHHq9Q.js";import"./useGraphicalItemIdentity-CBUuLMbL.js";import"./dataEntryStyles-hKuM-EJ6.js";import"./Curve-5IRE8Ev4.js";import"./step-98le-Vot.js";import"./path-DyVhHtw_.js";import"./ActivePoints-L_3TnI4T.js";import"./Dot-zng579xF.js";import"./getRadiusAndStrokeWidthFromDot-CnqQHwHm.js";import"./useElementOffset-DWPuYoRo.js";import"./uniqBy-C_OONL53.js";import"./iteratee-rFFt59sx.js";import"./Cross-D5C-EZJW.js";import"./Sector-Bsuk_kHk.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
