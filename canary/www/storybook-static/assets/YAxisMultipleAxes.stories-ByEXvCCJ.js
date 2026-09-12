import{R as t}from"./iframe-BS2EKBCb.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BOuW76NE.js";import{R as l}from"./zIndexSlice-DgCHBsPF.js";import{C as x}from"./ComposedChart-B5I1ESDC.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DU2jBt8K.js";import{L as a}from"./Line-Cy9qkYsp.js";import{X as c}from"./XAxis-BjDgsza5.js";import{T as g}from"./Tooltip-DLem5YaG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DXa6-y8E.js";import"./Text-mzbpVVI1.js";import"./resolveDefaultProps-TcviW97c.js";import"./DOMUtils-WOBZE1NB.js";import"./isWellBehavedNumber-DC3UycXE.js";import"./useId-caAF7v61.js";import"./useBackwardsCompatibleTheme-qcvR2xn0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B7lLwLGi.js";import"./index-DqlRD72w.js";import"./index-CV_3LUuL.js";import"./RechartsWrapper-BMyz7hVE.js";import"./axisSelectors-CyWNF9Af.js";import"./throttle-N5ne0m8p.js";import"./d3-scale-Weld_qs_.js";import"./index-Bzi9FVcX.js";import"./index-CzKnnb1A.js";import"./renderedTicksSlice-F9VbCDyF.js";import"./index-D5fLjVxw.js";import"./CartesianAxis-CKj7lC_q.js";import"./Layer-GWt7eqqf.js";import"./types-BQYuG1d5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-qCzL_6hu.js";import"./chartDataContext-CO5JDURO.js";import"./CategoricalChart-C5K9SC6Q.js";import"./AnimatedItems-CyRMeM58.js";import"./useAnimationId-DT-PTug0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DEzYnzUI.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ZcrlVc5g.js";import"./tooltipContext-D3n1U0sf.js";import"./RegisterGraphicalItemId-B1R9LLxS.js";import"./ErrorBarContext-Cw8TKYFj.js";import"./GraphicalItemClipPath-1wc1zrjW.js";import"./SetGraphicalItem-0zivWSPx.js";import"./getZIndexFromUnknown-DLegqRGd.js";import"./useGraphicalItemIdentity-D12-TlkG.js";import"./Curve-B-5JJSds.js";import"./step-C_EYK6G6.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Cjbzc0M8.js";import"./Dot-DU7ZcKmK.js";import"./getRadiusAndStrokeWidthFromDot-B5PCEdLb.js";import"./useElementOffset-4jPhR6y6.js";import"./uniqBy-Cq54zJ4p.js";import"./iteratee-BrmxT3n3.js";import"./Cross-Bo_a7FVO.js";import"./Sector-D8P6kuRr.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
