import{e as t}from"./iframe-BlWijLqW.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CNrfi_Sb.js";import{Y as r}from"./YAxis-DCz5GEme.js";import{R as l}from"./arrayEqualityCheck-wpbGPGp4.js";import{C as x}from"./ComposedChart-Bvywwt59.js";import{B as o}from"./Bar-Dx8O7N3a.js";import{L as a}from"./Line--NudrrhR.js";import{X as c}from"./XAxis-OLUbmSHc.js";import{T as A}from"./Tooltip-CvfY5XaH.js";import{R as g}from"./RechartsHookInspector-DmBYfqJt.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BXixkRdf.js";import"./CartesianAxis-Bh0UbraM.js";import"./Layer-3MYXWHxJ.js";import"./Text-zHguMFUU.js";import"./DOMUtils-DB8eToSF.js";import"./Label-Df_5RPeD.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-CJd84X-g.js";import"./zIndexSlice-CAH7mPZ1.js";import"./types-CMl5R0ed.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-Bq9gEA3Y.js";import"./axisSelectors-BcyrPMqb.js";import"./RechartsWrapper-DVoFofdD.js";import"./CartesianChart-B-NzXiwJ.js";import"./chartDataContext-Bi-RwErn.js";import"./CategoricalChart-yeAYRiqJ.js";import"./tooltipContext-DqK1JGcx.js";import"./ReactUtils-CbcjOK7p.js";import"./ActiveShapeUtils-CPx9BhWQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-IDnxfDb1.js";import"./useAnimationId-B1CL6Xpk.js";import"./Trapezoid-B75mUvLe.js";import"./Sector-BYlteXBh.js";import"./Symbols-BEH-AFaJ.js";import"./Curve-DR-_MvJg.js";import"./RegisterGraphicalItemId-CGPZoT1R.js";import"./ErrorBarContext-uU_zcojk.js";import"./GraphicalItemClipPath-C9wWAhjz.js";import"./SetGraphicalItem-UAqbhtt1.js";import"./getZIndexFromUnknown-CCGvzCyD.js";import"./graphicalItemSelectors-BsNSgCuD.js";import"./ActivePoints-JWw26lZk.js";import"./Dot-D4efsgOa.js";import"./getRadiusAndStrokeWidthFromDot-CWn6u2wW.js";import"./useElementOffset-CyDDhNEE.js";import"./iteratee-DmHclTd9.js";import"./Cross-BW--vN7Z.js";import"./index-BlR-9DJp.js";import"./ChartSizeDimensions-CSi05Yh4.js";import"./OffsetShower-C6MwKWid.js";import"./PlotAreaShower-BWRdXOpl.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const It=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,It as __namedExportsOrder,ut as default};
