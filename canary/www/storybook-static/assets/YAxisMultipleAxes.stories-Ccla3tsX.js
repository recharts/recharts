import{e as t}from"./iframe-CELk_iHp.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-PBKVxaw1.js";import{R as l}from"./arrayEqualityCheck-Jv-_2dlt.js";import{C as x}from"./ComposedChart-DXLKPhmj.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C002hZIp.js";import{L as a}from"./Line-BgJkyWDy.js";import{X as A}from"./XAxis-Dkm5sOcL.js";import{T as g}from"./Tooltip-EqoHihNy.js";import{R as f}from"./RechartsHookInspector-zC8sO4Uu.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Bdrxnh8Y.js";import"./Layer--Pc4EXaW.js";import"./resolveDefaultProps-DGpqOJqH.js";import"./Text-Bw3NjmwC.js";import"./DOMUtils-D-Am5_eq.js";import"./Label-Bd9YpboY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CCDRMMaH.js";import"./zIndexSlice-BKa9iYJo.js";import"./immer-CNryykoH.js";import"./types-CyX-tNTq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-fDAVE1e2.js";import"./hooks-nYvhXGgN.js";import"./axisSelectors-B_B8N_DF.js";import"./d3-scale-CkPD6mk7.js";import"./RechartsWrapper-iaOd2vsR.js";import"./index-C7-Jna_X.js";import"./CartesianChart-D2sMjbuw.js";import"./chartDataContext-BGxyOe8E.js";import"./CategoricalChart-oFZY99PF.js";import"./tooltipContext-JNnvp9Nv.js";import"./ReactUtils-Dj0EWLrR.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-B3MGtfHB.js";import"./isPlainObject-BehFM2KM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CE1dlDuT.js";import"./useAnimationId-1GRLd7ca.js";import"./Trapezoid-Dfk3zDGx.js";import"./Sector-DOGbklsh.js";import"./Symbols-Dx2mis7o.js";import"./symbol-DhXBBxwA.js";import"./step-BZd9qX-S.js";import"./Curve-D55eTV1c.js";import"./RegisterGraphicalItemId-DNcpshuw.js";import"./ErrorBarContext-DacGNm7D.js";import"./GraphicalItemClipPath-CX61POx4.js";import"./SetGraphicalItem-HEs6iBS3.js";import"./getZIndexFromUnknown-NyhZev-h.js";import"./graphicalItemSelectors-Bfu4ajbI.js";import"./ActivePoints-DO7snJgn.js";import"./Dot-dGAlOqLg.js";import"./getRadiusAndStrokeWidthFromDot-wRVRq9dq.js";import"./useElementOffset-D4fadBoO.js";import"./uniqBy-BjyCkiBk.js";import"./iteratee-CUDLRjQ1.js";import"./Cross-DkjIdaRm.js";import"./index-CuVYK_Ov.js";import"./ChartSizeDimensions-M-hHKi9p.js";import"./OffsetShower-ePPaic-x.js";import"./PlotAreaShower-D-7S5_Wy.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Tt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Tt as __namedExportsOrder,kt as default};
