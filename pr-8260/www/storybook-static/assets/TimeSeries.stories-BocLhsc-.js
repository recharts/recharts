import{R as e}from"./iframe-BrId7CKe.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CGJzYa5v.js";import{R as h}from"./zIndexSlice-DF5zMGO6.js";import{C as g}from"./ComposedChart-Cnp7765T.js";import{L as x}from"./Line-CgfEpiSf.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Did4wLnp.js";import{T as V}from"./Tooltip-BVNGnJB1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CGWn72D3.js";import"./Layer-CxlvVVO_.js";import"./resolveDefaultProps-DIgz9kBc.js";import"./Text-CtzCspEf.js";import"./ZIndexLayer-DtobrSuN.js";import"./index-D7ICnWyX.js";import"./index-EO2EMNzs.js";import"./Label-BOSTGjYW.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BScTjZiA.js";import"./throttle-CvD-CMS9.js";import"./types-BIH_CFXa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DAS2rh9P.js";import"./index-B4UkUUGe.js";import"./index-CKY_1Z5f.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-BWicBn7w.js";import"./RechartsWrapper-C0PTLzSu.js";import"./index-Drj8yiU0.js";import"./fillDefinitions-dpOaLydo.js";import"./CartesianChart-BQoBJqDq.js";import"./chartDataContext-BtKuFOy0.js";import"./CategoricalChart-D7PumRDT.js";import"./getRadiusAndStrokeWidthFromDot-2ewH2R2L.js";import"./Curve-CODof7zW.js";import"./step-D0GmmZR_.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-Dl3_KD-K.js";import"./ActivePoints-BfbfOk4s.js";import"./Dot-Bz04y-El.js";import"./activeStyles-haHqTj48.js";import"./useAnimationId-DnW4K7Yj.js";import"./Symbols-DW8eGAaV.js";import"./symbol-Bas1pNoF.js";import"./ErrorBarContext-Di-OPTeN.js";import"./SetGraphicalItem-Bx9N4hIP.js";import"./ActiveShapeUtils-B-iMU9qH.js";import"./useEffectiveDataKey-BlMggeza.js";import"./useElementOffset-CyYI02cJ.js";import"./uniqBy-DKGrDlDL.js";import"./iteratee-BEaiqON8.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CUleMcJR.js";import"./Rectangle-BiqZRBIg.js";import"./util-Dxo8gN5i.js";import"./Sector-DU6IjnP4.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
