import{R as t}from"./iframe-CpWBjTvp.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-3eU4T95U.js";import{R as l}from"./zIndexSlice-DUDjamRK.js";import{C as x}from"./ComposedChart-BVHJhCwJ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D_bMMxnZ.js";import{L as a}from"./Line-P1M0af3R.js";import{X as c}from"./XAxis-WebSLI5n.js";import{T as g}from"./Tooltip-pr3HU5Xv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BHRweOLu.js";import"./Text-BafsCBcm.js";import"./resolveDefaultProps-NIjw2OgC.js";import"./pageBackground-CKOzv8y-.js";import"./ZIndexLayer-BbGGEaTO.js";import"./index-BsKHwb8S.js";import"./index-BEj8e0rp.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Cbbt3MrT.js";import"./throttle-D3Uoll6g.js";import"./axisSelectors-DP-Cq8x3.js";import"./d3-scale-9EE4QQRc.js";import"./CartesianAxis-CgwFl8Jq.js";import"./Layer-DcRKRX6x.js";import"./types-BKpcX7F2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DvLiRaDl.js";import"./index-BKdflUfl.js";import"./index-mAc_XfwU.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DxDmVade.js";import"./index-xtKZJIPQ.js";import"./CartesianChart-2SX8QMEH.js";import"./ZIndexPortal-D23JLhQd.js";import"./CategoricalChart-tOUFzxMq.js";import"./LabelList-B0vE2GKD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DrAVfzV4.js";import"./useAnimationId-qe3YUtTg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DpSDZTd0.js";import"./tooltipContext-CxhFuor7.js";import"./dataEntryStyles-BMyxGDVI.js";import"./ErrorBarContext-Bmj1TjNN.js";import"./activeStyles-CPrr7d0w.js";import"./SetGraphicalItem-Bf14-AlA.js";import"./getZIndexFromUnknown-Cleopx-N.js";import"./useEffectiveDataKey-CmhiZ1Bu.js";import"./omit-B9VWdMkR.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DzwEiiyx.js";import"./step-D2PoiFak.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CWRCwq-4.js";import"./Dot-D1fFPcbO.js";import"./Symbols-D-1GfXlL.js";import"./symbol-C1ODNnyl.js";import"./getRadiusAndStrokeWidthFromDot-BkVlgOSF.js";import"./useElementOffset-BB9lz8UY.js";import"./uniqBy-BEMNrNmR.js";import"./iteratee-NM3yHH-L.js";import"./Cross-CJ1zLrh7.js";import"./Sector-cqrvmsip.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
