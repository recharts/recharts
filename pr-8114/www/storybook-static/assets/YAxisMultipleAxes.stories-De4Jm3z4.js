import{R as t}from"./iframe-CCedNpIL.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C1dIb0Dq.js";import{R as l}from"./zIndexSlice-FaVG8kHH.js";import{C as x}from"./ComposedChart-CuixBgtF.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BQVGw10E.js";import{L as a}from"./Line-Nm4xoA8b.js";import{X as c}from"./XAxis-BXe8rtVd.js";import{T as g}from"./Tooltip-Bw1DSCFw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CBEI3-wb.js";import"./Text-B0ZPk73p.js";import"./resolveDefaultProps-BU47eI4H.js";import"./pageBackground-pCtx7B-s.js";import"./ZIndexLayer-BPlzci0x.js";import"./index-a9wrUunR.js";import"./index-B1OaBK8_.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bk6LJwmt.js";import"./throttle-Br1C3UWP.js";import"./axisSelectors-BoL5XRtd.js";import"./d3-scale-EyFZEVUo.js";import"./CartesianAxis-CVTWbWdI.js";import"./Layer-Cr1LK46x.js";import"./types-D0KlXew0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BWK-8Wbg.js";import"./index-DKQhzlop.js";import"./index-CL5Xa_TG.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B3okQ-B8.js";import"./index-D4SSZ3m3.js";import"./CartesianChart-CaGoIdwh.js";import"./ZIndexPortal-Bmj6fCDQ.js";import"./CategoricalChart-C8fCaDAg.js";import"./LabelList-cRyR8A9p.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BX_KITs0.js";import"./useAnimationId-CcrjU78K.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DzHDFOYU.js";import"./tooltipContext-BNwhBjw1.js";import"./dataEntryStyles-B3jzja7w.js";import"./ErrorBarContext-BMxzBjzC.js";import"./activeStyles-DICcYqor.js";import"./SetGraphicalItem-CeKorW8q.js";import"./getZIndexFromUnknown-ThCjO9zp.js";import"./useEffectiveDataKey-Lst-3VK9.js";import"./omit-DuwuPrBG.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CPRSU3Na.js";import"./step-BxzXSqS7.js";import"./path-DyVhHtw_.js";import"./ActivePoints-xoEQqRpP.js";import"./Dot-Dkc7CiNw.js";import"./Symbols-B_HwlHbC.js";import"./symbol-CpsCxClc.js";import"./getRadiusAndStrokeWidthFromDot-B1LY2Lwz.js";import"./useElementOffset-Byj33S_L.js";import"./uniqBy-BqJ8xbG-.js";import"./iteratee-gXYAUoI2.js";import"./Cross-BnLIW9Lf.js";import"./Sector-BmGEMOh-.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
