import{e as t}from"./iframe-Dq2D9WMR.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CJVhWVm-.js";import{g as l}from"./zIndexSlice-CMIgpwRl.js";import{C as x}from"./ComposedChart-Ctt5r4_8.js";import{p as A}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-C49e8k3x.js";import{L as a}from"./Line-ElG_lwe6.js";import{X as c}from"./XAxis-BEqsZJa-.js";import{T as g}from"./Tooltip-DMgDKly6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Dg89qnmN.js";import"./CartesianAxis-9djuB4O0.js";import"./Layer-CNg3jf3H.js";import"./resolveDefaultProps-CL0P-2Ye.js";import"./Text-DsY1ckdl.js";import"./DOMUtils-DuGpXxvH.js";import"./isWellBehavedNumber-CElaIhJa.js";import"./Label-DafpBHua.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BazpBvjE.js";import"./index-toY2TPxE.js";import"./index-ComImMI9.js";import"./types-C93vTFKm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CfboEt5t.js";import"./immer-DBox_88Y.js";import"./RechartsWrapper-Coa45hTw.js";import"./index-Vw7ge0ya.js";import"./axisSelectors-sK2-dJnb.js";import"./d3-scale-CJAlquTP.js";import"./CartesianChart-DTsAEBhV.js";import"./chartDataContext-DSYMXmV-.js";import"./CategoricalChart-DqFO3fer.js";import"./tooltipContext-DPzld1EZ.js";import"./ReactUtils-CnckncOE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BslqwIXI.js";import"./useAnimationId-uSyAtuoQ.js";import"./ActiveShapeUtils-C8zRj9nc.js";import"./RegisterGraphicalItemId-27foWtUc.js";import"./ErrorBarContext-ClYGb34v.js";import"./GraphicalItemClipPath-DwKkk3VM.js";import"./SetGraphicalItem-D7EoJphE.js";import"./getZIndexFromUnknown-C2CqlFtj.js";import"./graphicalItemSelectors-Di7DaTSh.js";import"./Curve-B4KKsiQU.js";import"./step-uPZi_6ZX.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Cd1Z09h4.js";import"./Dot-CjWxaC-Q.js";import"./getRadiusAndStrokeWidthFromDot-D25HmC7L.js";import"./useElementOffset-CBQMpBJe.js";import"./uniqBy-Bftont1e.js";import"./iteratee-4ZWKoi0K.js";import"./Cross-o4f6Faa-.js";import"./Sector-DUAEy4ch.js";const It={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Et=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Et as __namedExportsOrder,It as default};
