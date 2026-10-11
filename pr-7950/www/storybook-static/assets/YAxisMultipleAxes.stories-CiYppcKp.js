import{R as t}from"./iframe-CBWhl09v.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C5dVmWPc.js";import{R as l}from"./zIndexSlice-B1AH5YJS.js";import{C as x}from"./ComposedChart-DXJToHny.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C5HaWseV.js";import{L as a}from"./Line-B0sSvzHP.js";import{X as c}from"./XAxis-tzQHqynD.js";import{T as g}from"./Tooltip-Ebv0bBWC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CJ9xjWYO.js";import"./Text-fMbisw4f.js";import"./resolveDefaultProps-CJSj2XgG.js";import"./pageBackground-zeq0PAuW.js";import"./isWellBehavedNumber-CSPLhkuq.js";import"./useId-KLEpqtFg.js";import"./useBackwardsCompatibleTheme-Z7_zoiGA.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DmDmq8bi.js";import"./index-BkuzBr4Q.js";import"./index-DAR39XB6.js";import"./RechartsWrapper-BU6mzVyD.js";import"./axisSelectors-B6qdSbwV.js";import"./throttle-bJqzO9Ic.js";import"./d3-scale-BNKhe_xR.js";import"./index-D8EheK28.js";import"./index-rVwT5Wbe.js";import"./renderedTicksSlice-GOLzDKAI.js";import"./index-CFTfJwzV.js";import"./CartesianAxis-BGPUbFHg.js";import"./Layer-DxeVA2bX.js";import"./types-Dq74-fjW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BcuREG8f.js";import"./chartDataContext-CWF_m6e5.js";import"./CategoricalChart-Dvk5cwWF.js";import"./activeStyles-BZ5qRbpV.js";import"./useAnimationId-T7zgTeVd.js";import"./dataEntryStyles-CZ7XLNEq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B0IEIFtA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DJCIfDMk.js";import"./tooltipContext-CG3AKtRI.js";import"./ErrorBarContext-Bcceb6pe.js";import"./GraphicalItemClipPath-DGC1RDqu.js";import"./SetGraphicalItem-Dvg6XScA.js";import"./getZIndexFromUnknown-Dn3kwNvw.js";import"./useGraphicalItemIdentity-BtkPyjJj.js";import"./Curve-B56TGwB_.js";import"./step-CZA2KIrz.js";import"./path-DyVhHtw_.js";import"./ActivePoints-mIk3yLeC.js";import"./Dot-BHORkSEl.js";import"./getRadiusAndStrokeWidthFromDot-B1PyR7dw.js";import"./useElementOffset-BeDLriUL.js";import"./uniqBy-BSAN_SQR.js";import"./iteratee-kSqFHTFy.js";import"./Cross-CQN_SAeC.js";import"./Sector-hJbvafuJ.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
