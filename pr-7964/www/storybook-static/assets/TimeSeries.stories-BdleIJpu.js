import{R as e}from"./iframe-BKHpBCGR.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DTRZ1dWN.js";import{R as h}from"./zIndexSlice-MbsPskuO.js";import{C as g}from"./ComposedChart-iKWFtV78.js";import{L as x}from"./Line-UOyYMjp1.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CFmaNxVK.js";import{T as V}from"./Tooltip-BPoeNbLz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-mCcuS_Uy.js";import"./Layer-DybYLhVT.js";import"./resolveDefaultProps-LMHkslvY.js";import"./Text-DYCZls4m.js";import"./pageBackground-CYge6A3w.js";import"./isWellBehavedNumber-DZ2Xn8RG.js";import"./useId-Dt-1BK0Z.js";import"./useBackwardsCompatibleTheme-C46GemJr.js";import"./Label-O1JP__wG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BdmXZICd.js";import"./index-BGfSAvuv.js";import"./index-AIIPc7Ew.js";import"./types-Ck1lG8KT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BZuStCiV.js";import"./throttle-3nfkHG5O.js";import"./index-MJAbFl6s.js";import"./index-D7XXjqey.js";import"./isBuffer-BG75eWKN.js";import"./axisSelectors-CJodVBjM.js";import"./RechartsWrapper-D-Zfjt-o.js";import"./index-pfuxfga8.js";import"./CartesianChart-CXURKO2Z.js";import"./chartDataContext-BJRV3EGA.js";import"./CategoricalChart-sVMN8Krq.js";import"./Curve-DUSP7h70.js";import"./step-Dts2RvRs.js";import"./path-DyVhHtw_.js";import"./activeStyles-Ciq5Cwqo.js";import"./useAnimationId-yls0YfbP.js";import"./dataEntryStyles-dsuf4aHw.js";import"./ActivePoints-BAFHTjJh.js";import"./Dot-Ba-w2X1N.js";import"./ErrorBarContext-D-66_lvv.js";import"./GraphicalItemClipPath--201yH7F.js";import"./SetGraphicalItem-BcZa1iuc.js";import"./getRadiusAndStrokeWidthFromDot-DBGL35Fg.js";import"./ActiveShapeUtils-DQESG7Jg.js";import"./useEffectiveDataKey-BIsGwEM1.js";import"./useElementOffset-Cn98WGsz.js";import"./uniqBy-CShR7vUs.js";import"./iteratee-BNxeOl7Y.js";import"./Cross-azVbcZgi.js";import"./Rectangle-CDgGLfNl.js";import"./util-Dxo8gN5i.js";import"./Sector-kZE3ZYJf.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
