import{e as t}from"./iframe-BzK4IM4O.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisProps-ByMyQu0r.js";import{Y as r}from"./YAxis-FFHKkbRQ.js";import{R as l}from"./arrayEqualityCheck-DntSlYRe.js";import{C as x}from"./ComposedChart-DeS0V09V.js";import{B as o}from"./Bar-BnNxeRwK.js";import{L as a}from"./Line-BDor0g31.js";import{X as c}from"./XAxis-BEioX7l9.js";import{T as A}from"./Tooltip-DG0VLx16.js";import{R as f}from"./RechartsHookInspector-Blpd2IS8.js";import{p as g}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-DxvkoyFj.js";import"./CartesianAxis-Bvc9afGW.js";import"./Layer-D3djBZrj.js";import"./Text-2hmmkMzb.js";import"./DOMUtils-DhJGRkcK.js";import"./Label-Cw9dZn4K.js";import"./PolarUtils-CkcjhAmg.js";import"./ZIndexLayer-CvqQuagi.js";import"./zIndexSlice-CDkWNK3b.js";import"./types-CR25OGX1.js";import"./hooks-VI0oeyv4.js";import"./axisSelectors-FRDErLTA.js";import"./RechartsWrapper-G-7uZuvB.js";import"./CartesianChart-LpoIcLQ4.js";import"./chartDataContext-DMRgNTR6.js";import"./CategoricalChart-DIHkHBGg.js";import"./tooltipContext-Cw9KLuKa.js";import"./ReactUtils-BdJFLjIw.js";import"./ActiveShapeUtils-CRuw5H-2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CHjVgmr4.js";import"./useAnimationId-BpCcKQdg.js";import"./Trapezoid-BORiQi9t.js";import"./Sector-BXKtHGMH.js";import"./Symbols-C_2JILz4.js";import"./Curve-Cez8Njk6.js";import"./RegisterGraphicalItemId-BlwXRQ76.js";import"./ErrorBarContext-DVva_-TX.js";import"./GraphicalItemClipPath-C1-ivBuq.js";import"./SetGraphicalItem-DxeqcNbM.js";import"./getZIndexFromUnknown-T54ciAeD.js";import"./graphicalItemSelectors-BRf_76Py.js";import"./ActivePoints-Dcm7tES9.js";import"./Dot-CeVvwLNa.js";import"./getRadiusAndStrokeWidthFromDot-XEghJGNu.js";import"./useElementOffset-a9sy_bGO.js";import"./iteratee-D-fyWy_G.js";import"./Cross-BYH-rkpi.js";import"./index-977mc2AH.js";import"./ChartSizeDimensions-D2LiT7mU.js";import"./OffsetShower-0fHUvhro.js";import"./PlotAreaShower-DvSB-8u7.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:g},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisProps)
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const It=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,It as __namedExportsOrder,ut as default};
