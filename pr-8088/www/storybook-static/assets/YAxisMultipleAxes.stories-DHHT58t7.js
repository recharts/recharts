import{R as t}from"./iframe-DcaMyu57.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Ctjpx2tI.js";import{R as l}from"./zIndexSlice-D63TC5wE.js";import{C as x}from"./ComposedChart-Ccm1rBcn.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CWFZ-DmD.js";import{L as a}from"./Line-qfkHf2wW.js";import{X as c}from"./XAxis-CpQfhxVu.js";import{T as g}from"./Tooltip-49fj7LmN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CNqQQqDH.js";import"./Text-BDVAjJGp.js";import"./resolveDefaultProps-BIhtVjr1.js";import"./pageBackground-DJiDI2js.js";import"./useId-2CjiTV-a.js";import"./ZIndexLayer-BAtegXWd.js";import"./index-LUaWadAh.js";import"./index-C1eYPsJe.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C8YroQFB.js";import"./throttle-DTKuFpeU.js";import"./dataEntryStyles-Dvqex9ju.js";import"./axisSelectors-DeMGjxl4.js";import"./d3-scale-CtXzbLe9.js";import"./CartesianAxis-CeZT8ZwV.js";import"./Layer-Buw-ejS2.js";import"./types-CezfUA9a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B7oGrXiB.js";import"./index-DhjSPGN6.js";import"./index-CGLqJivQ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-s9QE5BnJ.js";import"./index-CZJeyZvE.js";import"./CartesianChart-Doy7puzJ.js";import"./chartDataContext-Cvuxfrl6.js";import"./CategoricalChart-Oo-gpddM.js";import"./activeStyles-DWP2-Wsz.js";import"./useAnimationId-CY8QIDMT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BG3wMj9I.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-EJ-BM8cF.js";import"./tooltipContext-BLvne3kB.js";import"./RegisterGraphicalItemId-Bf7_3i_n.js";import"./ErrorBarContext-4Q2l69vj.js";import"./SetGraphicalItem-CCEEUI7s.js";import"./getZIndexFromUnknown-DYOFYyvu.js";import"./useEffectiveDataKey-90ZX8Dti.js";import"./omit-y-u6NmAA.js";import"./isArguments-yB-y1yaH.js";import"./Curve-zPXLC5y1.js";import"./step-DwnhkCIy.js";import"./path-DyVhHtw_.js";import"./ActivePoints-ByVehSZn.js";import"./Dot-DNgNZq3J.js";import"./Symbols-0k-WiD9E.js";import"./symbol-uzrYNuoI.js";import"./getRadiusAndStrokeWidthFromDot-brVJexwW.js";import"./useElementOffset-BZhsAoPk.js";import"./uniqBy-Debw3FXq.js";import"./iteratee-DfBVt2Tm.js";import"./Cross-BtF40hvQ.js";import"./Sector-jAYUYlJM.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
