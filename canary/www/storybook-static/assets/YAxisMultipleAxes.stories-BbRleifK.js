import{R as t}from"./iframe-CcLWsqZ6.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BSdoGpjP.js";import{R as l}from"./zIndexSlice-qEbbRsug.js";import{C as x}from"./ComposedChart-EaqAREPx.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-SLu3_c4A.js";import{L as a}from"./Line-CqlVNCGh.js";import{X as c}from"./XAxis-BgOtkzm1.js";import{T as g}from"./Tooltip-BNUTWoNn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-FbOJbP-p.js";import"./Text-B8YpIyQn.js";import"./resolveDefaultProps-DIHsajMe.js";import"./pageBackground-LUiwpw9x.js";import"./useId-HcHlz_oH.js";import"./ZIndexLayer-DNvaLTFc.js";import"./index-BFIBYpnF.js";import"./index-DS2FinM5.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-ChPgG8gV.js";import"./throttle-QCGHXTx2.js";import"./dataEntryStyles-Cm1A0_Zh.js";import"./axisSelectors-DKMD16Y3.js";import"./d3-scale-C4Z54rtJ.js";import"./CartesianAxis-nGOA1KMV.js";import"./Layer-Cid6c7Vb.js";import"./types-B5Ef_z7I.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ByXwp7t2.js";import"./index-53ZRgOab.js";import"./index-DTchXhsD.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BXLQXmKg.js";import"./index-DgxdHgy0.js";import"./CartesianChart-DtQ910PV.js";import"./chartDataContext-BOZiBkOs.js";import"./CategoricalChart-xvgg784f.js";import"./activeStyles-l3ZfSaP4.js";import"./useAnimationId-D35HAJRU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D6aDAVT3.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B0HZ1tIg.js";import"./tooltipContext-jb5dZxBY.js";import"./RegisterGraphicalItemId-DuSlzxcR.js";import"./ErrorBarContext-BFxrQbxP.js";import"./SetGraphicalItem-DRC1z2NN.js";import"./getZIndexFromUnknown-CZfxuGzz.js";import"./useEffectiveDataKey-7iKmBNHY.js";import"./omit-C3SYmDSk.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CkzSpo54.js";import"./step-Dkisf4Kt.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Ch_IhoTN.js";import"./Dot-DxmHRpLN.js";import"./Symbols-CqDetlVC.js";import"./symbol-CfzxdKp_.js";import"./getRadiusAndStrokeWidthFromDot-Dy2q91XH.js";import"./useElementOffset-CzNyUy0f.js";import"./uniqBy-Bl1hupsk.js";import"./iteratee-BmEXTGiW.js";import"./Cross-CiNcOdta.js";import"./Sector-B-5V9BZl.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
