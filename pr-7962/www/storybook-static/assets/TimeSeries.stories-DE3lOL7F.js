import{R as e}from"./iframe-D3EjTtxy.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CBAr_26y.js";import{R as h}from"./zIndexSlice-CR47Grm-.js";import{C as g}from"./ComposedChart-DuMK799R.js";import{L as x}from"./Line-BwJdDGaV.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Bcyj84u8.js";import{T as V}from"./Tooltip-CcecZwBS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Mzi-Pwf8.js";import"./Layer-CAR2aUbH.js";import"./resolveDefaultProps-CypR0Li3.js";import"./Text-D8BNDsFW.js";import"./pageBackground-Bgbh54PU.js";import"./isWellBehavedNumber-D6-F1Zhx.js";import"./useId-CXtTlWvS.js";import"./useBackwardsCompatibleTheme-DShn4Fj5.js";import"./Label-Cwzl5MfK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DYrhxp9-.js";import"./index-BrBaOJJz.js";import"./index-ClKWjY2h.js";import"./types-OWn5Mrao.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DWYht6zE.js";import"./throttle-EojsqAtG.js";import"./index-CW2m-a8N.js";import"./index-D-PCy9lp.js";import"./isBuffer-BG75eWKN.js";import"./axisSelectors-2jJKhRaD.js";import"./RechartsWrapper-BKqCmNei.js";import"./index-C-LGK5kE.js";import"./CartesianChart-ClyYLTkq.js";import"./chartDataContext-tvTSeXcP.js";import"./CategoricalChart-D-xvlCPh.js";import"./Curve-DGfDXyXs.js";import"./step-BpQzdfyO.js";import"./path-DyVhHtw_.js";import"./activeStyles-Celt-13r.js";import"./useAnimationId-C3lA_xne.js";import"./dataEntryStyles-BOeZ2OB5.js";import"./ActivePoints-BFJ9lPgu.js";import"./Dot-B5LpJNu8.js";import"./ErrorBarContext-D2RzPC2k.js";import"./GraphicalItemClipPath-qNx1D-3O.js";import"./SetGraphicalItem-2Yc4bdBx.js";import"./getRadiusAndStrokeWidthFromDot-O_fwqGez.js";import"./ActiveShapeUtils-DJnsuYPC.js";import"./useEffectiveDataKey-CruL2487.js";import"./useElementOffset-CcOLWzLv.js";import"./uniqBy-BMWd6n_M.js";import"./iteratee-CFhE0l7L.js";import"./Cross-DlFXEbgE.js";import"./Rectangle-BkUhA54S.js";import"./util-Dxo8gN5i.js";import"./Sector-CtInToRa.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
